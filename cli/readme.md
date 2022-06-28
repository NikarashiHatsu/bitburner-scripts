## Usage

### scan-analyze.js

This script will mimic the Bitburner's `scan-analyze`.

Usage:

`run scan-analyze.js 2 --tail`:

```
> n00dles
--Root Access: YES, Required hacking skill: 1
--Number of open ports required to NUKE: 0
--RAM 4GB

> foodnstuff
--Root Access: YES, Required hacking skill: 1
--Number of open ports required to NUKE: 0
--RAM 16GB

> sigma-cosmetics
--Root Access: YES, Required hacking skill: 5
--Number of open ports required to NUKE: 0
--RAM 16GB

> joesguns
--Root Access: YES, Required hacking skill: 10
--Number of open ports required to NUKE: 0
--RAM 16GB

> hong-fang-tea
--Root Access: YES, Required hacking skill: 30
--Number of open ports required to NUKE: 0
--RAM 16GB

> harakiri-sushi
--Root Access: YES, Required hacking skill: 40
--Number of open ports required to NUKE: 0
--RAM 16GB

> iron-gym
--Root Access: YES, Required hacking skill: 100
--Number of open ports required to NUKE: 1
--RAM 32GB
```

You can define the depth of the script, with anything you want. Giving you an advantage in the early stage of the game, without having the `Deepscan v1` or `Deepscan v2` program which is expensive.

`run scan-analyze.js 2 --tail`:
```
> n00dles
--Root Access: YES, Required hacking skill: 1
--Number of open ports required to NUKE: 0
--RAM 4GB

> foodnstuff
--Root Access: YES, Required hacking skill: 1
--Number of open ports required to NUKE: 0
--RAM 16GB

> sigma-cosmetics
--Root Access: YES, Required hacking skill: 5
--Number of open ports required to NUKE: 0
--RAM 16GB

----> nectar-net
------Root Access: YES, Required hacking skill: 20
------Number of open ports required to NUKE: 0
------RAM 16GB

----> CSEC
------Root Access: YES, Required hacking skill: 52
------Number of open ports required to NUKE: 1
------RAM 8GB

> joesguns
--Root Access: YES, Required hacking skill: 10
--Number of open ports required to NUKE: 0
--RAM 16GB

----> max-hardware
------Root Access: YES, Required hacking skill: 80
------Number of open ports required to NUKE: 1
------RAM 32GB

> hong-fang-tea
--Root Access: YES, Required hacking skill: 30
--Number of open ports required to NUKE: 0
--RAM 16GB

> harakiri-sushi
--Root Access: YES, Required hacking skill: 40
--Number of open ports required to NUKE: 0
--RAM 16GB

> iron-gym
--Root Access: YES, Required hacking skill: 100
--Number of open ports required to NUKE: 1
--RAM 32GB

----> zer0
------Root Access: YES, Required hacking skill: 75
------Number of open ports required to NUKE: 1
------RAM 32GB
```