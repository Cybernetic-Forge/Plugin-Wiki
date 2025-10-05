---
layout: default
title: Grimoires Spells
description: Complete guide to Grimoires spell system
---

# Grimoires Spells

Spells are the core commands of the Grimoires system, each presented as a magical incantation with unique properties and effects.

## Spell Basics

Every spell in Grimoires has the following properties:

- **Name**: The spell's identifier
- **Incantation**: The command syntax to cast it
- **Mana Cost**: Resources or cooldown required
- **Effect**: What the spell does
- **Components**: Required parameters or items
- **Level**: Minimum level to learn the spell

## Casting Spells

### Basic Casting

```bash
# General spell casting syntax
/spell cast <spell_name> [arguments]

# Example
/spell cast light
/spell cast teleport "Main Hall"
```

### Advanced Casting

```bash
# Cast with modifiers
/spell cast <spell_name> --power 2 [arguments]

# Chain multiple spells
/spell chain light teleport "spawn"

# Silent casting (no visual effects)
/spell cast <spell_name> --silent
```

## Spell Categories

### 🔮 Divination Spells

Spells for information gathering and revelation:

#### Scry
**Incantation**: `/spell cast scry [target]`  
**Mana Cost**: 5  
**Effect**: Reveals information about a target player or location

```bash
# Scry on a player
/spell cast scry PlayerName

# Scry on a location
/spell cast scry --coords 100 64 200
```

#### Reveal
**Incantation**: `/spell cast reveal [type]`  
**Mana Cost**: 10  
**Effect**: Reveals hidden entities or information

```bash
# Reveal invisible entities
/spell cast reveal entities

# Reveal hidden blocks
/spell cast reveal blocks
```

#### Chronicle
**Incantation**: `/spell cast chronicle [subject]`  
**Mana Cost**: 8  
**Effect**: Shows history and logs

```bash
# View server history
/spell cast chronicle server

# View player history
/spell cast chronicle PlayerName
```

### ⚡ Evocation Spells

Spells that create effects and manipulate energy:

#### Light
**Incantation**: `/spell cast light [duration]`  
**Mana Cost**: 10  
**Effect**: Creates magical light for specified duration

```bash
# Create light for 60 seconds
/spell cast light 60

# Create permanent light
/spell cast light --permanent
```

#### Spark
**Incantation**: `/spell cast spark <target>`  
**Mana Cost**: 15  
**Effect**: Creates electrical energy at target

```bash
# Create spark at location
/spell cast spark --coords 100 70 200
```

### 🌀 Transmutation Spells

Spells that transform and modify:

#### Transmute
**Incantation**: `/spell cast transmute <source> <target>`  
**Mana Cost**: 20  
**Effect**: Transforms items or blocks

```bash
# Transmute stone to iron
/spell cast transmute stone iron 64

# Transmute with efficiency bonus
/spell cast transmute stone diamond 1 --power 3
```

#### Reshape
**Incantation**: `/spell cast reshape <area>`  
**Mana Cost**: 25  
**Effect**: Modifies terrain in specified area

```bash
# Flatten area
/spell cast reshape flatten 10x10

# Create sphere
/spell cast reshape sphere 5
```

### 🚪 Conjuration Spells

Spells for movement and summoning:

#### Teleport
**Incantation**: `/spell cast teleport <destination>`  
**Mana Cost**: 15  
**Effect**: Instantly transport to destination

```bash
# Teleport to location
/spell cast teleport "Main Hall"

# Teleport to coordinates
/spell cast teleport 100 64 200

# Teleport with passengers
/spell cast teleport spawn --group
```

#### Summon
**Incantation**: `/spell cast summon <entity>`  
**Mana Cost**: 30  
**Effect**: Summons an entity

```bash
# Summon a guardian
/spell cast summon guardian

# Summon with custom properties
/spell cast summon guardian --level 5 --name "Protector"
```

### 🛡️ Abjuration Spells

Protective and defensive spells:

#### Ward
**Incantation**: `/spell cast ward <area>`  
**Mana Cost**: 25  
**Effect**: Creates protective barrier

```bash
# Create ward around current location
/spell cast ward 10

# Create ward with specific properties
/spell cast ward 15 --type fire --duration 3600
```

#### Banish
**Incantation**: `/spell cast banish <target>`  
**Mana Cost**: 35  
**Effect**: Removes hostile entities

```bash
# Banish all hostiles in area
/spell cast banish --radius 20

# Banish specific entity type
/spell cast banish zombie --radius 50
```

## Learning Spells

### Spell Discovery

```bash
# List all available spells
/spell list

# List spells by category
/spell list --category divination

# Search for spells
/spell search teleport
```

### Spell Learning

```bash
# Learn a new spell
/spell learn <spell_name>

# View spell details before learning
/spell info <spell_name>

# Check learned spells
/spell known
```

### Spell Mastery

As you cast spells, you gain mastery:

```bash
# Check mastery level
/spell mastery <spell_name>

# View mastery benefits
/spell mastery info <spell_name>
```

Mastery benefits:
- **Level 1**: Basic casting
- **Level 2**: Reduced mana cost (10%)
- **Level 3**: Reduced cooldown (15%)
- **Level 4**: Enhanced effects
- **Level 5**: Perfect casting (no failures)

## Spell Modifiers

Enhance spells with modifiers:

### Power Modifier
Increases spell effectiveness:
```bash
/spell cast light --power 2
```

### Duration Modifier
Extends spell effects:
```bash
/spell cast ward 10 --duration 7200
```

### Range Modifier
Increases spell range:
```bash
/spell cast reveal --range 50
```

### Silent Modifier
Casts without visual/audio effects:
```bash
/spell cast teleport spawn --silent
```

## Spell Combinations

Chain spells for powerful combos:

```bash
# Reveal then teleport
/spell chain reveal teleport

# Ward then summon
/spell chain ward summon guardian
```

## Creating Custom Spells

Advanced users can create custom spells:

```yaml
custom_spells:
  my_light_spell:
    name: "Bright Light"
    category: evocation
    mana_cost: 12
    cooldown: 30
    effects:
      - type: light
        duration: 120
        intensity: 15
    incantation: "Lux Maxima"
```

## Spell Cooldowns

Most spells have cooldowns to prevent spam:

```bash
# Check cooldown status
/spell cooldown <spell_name>

# View all active cooldowns
/spell cooldowns
```

## Troubleshooting

### Spell Failed to Cast

- Check mana/resources available
- Verify you've learned the spell
- Ensure cooldown has expired
- Check for required components

### Insufficient Mana

- Wait for mana regeneration
- Use mana potions or items
- Reduce spell power modifier

## Next Steps

- Explore [Rituals](../rituals/) for advanced workflows
- Return to [Grimoires Overview](../)
