"""
==============================================================================
BOT DISCORD DE GESTION DE TICKETS ET SUPPORT CLIENT AVEC SQLITE
  - BTS SIO SISR
==============================================================================
"""

import discord
from discord.ext import commands
import sqlite3
import datetime
import os

intents = discord.Intents.default()
intents.message_content = True
intents.guilds = True

bot = commands.Bot(command_prefix="!", intents=intents)

# Connexion / Initialisation SQLite
conn = sqlite3.connect("tickets.db")
cursor = conn.cursor()
cursor.execute("""
CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT,
    channel_id TEXT,
    status TEXT,
    created_at TIMESTAMP
)
""")
conn.commit()

@bot.event
async def on_ready():
    print(f"[*] Bot connecté sous l'identifiant : {bot.user}")
    print("[*] Système de tickets opérationnel.")

@bot.command(name="ticket")
async def create_ticket(ctx):
    guild = ctx.guild
    author = ctx.author

    # Création des permissions pour le canal privé
    overwrites = {
        guild.default_role: discord.PermissionOverwrite(read_messages=False),
        author: discord.PermissionOverwrite(read_messages=True, send_messages=True),
        guild.me: discord.PermissionOverwrite(read_messages=True, send_messages=True)
    }

    channel_name = f"ticket-{author.name.lower()}"
    channel = await guild.create_text_channel(name=channel_name, overwrites=overwrites)

    cursor.execute("INSERT INTO tickets (user_id, channel_id, status, created_at) VALUES (?, ?, ?, ?)",
                   (str(author.id), str(channel.id), "OPEN", datetime.datetime.now()))
    conn.commit()

    embed = discord.Embed(
        title=f"Support Technique - Ticket #{channel.name}",
        description="Bonjour ! Un membre de l'équipe d'administration système va prendre en charge votre demande.\nPour clore ce ticket, tapez `!close`.",
        color=0x3b82f6
    )
    await channel.send(f"{author.mention}", embed=embed)
    await ctx.send(f"Ticket ouvert avec succès dans {channel.mention} !", delete_after=5)

@bot.command(name="close")
async def close_ticket(ctx):
    channel = ctx.channel
    if "ticket-" in channel.name:
        cursor.execute("UPDATE tickets SET status = 'CLOSED' WHERE channel_id = ?", (str(channel.id),))
        conn.commit()
        await ctx.send("[*] Clôture du ticket et archivage des logs en cours...")
        await channel.delete()

if __name__ == "__main__":
    TOKEN = os.getenv("DISCORD_BOT_TOKEN", "METS_TON_TOKEN_ICI")
    # bot.run(TOKEN)
