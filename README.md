# ATM-7-Plus
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/radj307/ATM-7-Plus?label=latest&style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/radj307/ATM-7-Plus/total?style=flat-square)

Server-side custom configs &amp; KubeJS scripts for minecraft servers running the [ATM7](https://github.com/AllTheMods/ATM-7) modpack.


## Installation

*Configs are server-side only; installing it on clients is unnecessary and won't do anything.*

### Existing Servers

**Before overwriting the existing configs, make a backup of them!**

 1. Download the [latest release](https://github.com/radj307/ATM-7-Plus/releases/latest) archive.
 2. Extract the archive into your existing server directory, but don't delete the `.zip` file yet.
 3. Open the not-yet-deleted `.zip` file & copy everything inside of the `defaultconfigs/` directory to your server's world-specific config directory: `<YOUR_WORLD_NAME>/serverconfig/`.  
 4. Delete the zip file. *(You can keep it if you want, but it'll just be wasting space at this point.)*

### New Servers

 1. Download the [latest release](https://github.com/radj307/ATM-7-Plus/releases/latest) archive.
 2. Extract the archive's contents into your server's `.minecraft/` directory; overwriting at your discretion when prompted.  
    *(If you're using Windows, you will be prompted to merge similarly-named directories if you did it correctly.)*

### Using Git
If you know how to use git, you can also clone the repository inside of your server directory to achieve the same result as above.
