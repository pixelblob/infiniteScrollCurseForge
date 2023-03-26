// ==UserScript==
// @name         Fabric/Forge Buttons + Infinite Scroll
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        https://www.curseforge.com/minecraft/mc-mods*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=curseforge.com
// @require      https://raw.githubusercontent.com/pixelblob/infiniteScrollCurseForge/master/main.js
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/pixelblob/infiniteScrollCurseForge/master/main.js
// @updateURL    https://raw.githubusercontent.com/pixelblob/infiniteScrollCurseForge/master/main.js
// ==/UserScript== 

(function () {
    'use strict';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var pageNum = +urlParams.get("page") || 1

    var initPageNumber = urlParams.get("page") || 1

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    console.log("FUCK YOU")

    return

    var shtuff = []

    const hashes = [{ "file": "3dskinlayers-forge-1.5.2-mc1.19.1.jar", "hash": "94ae6b73fdcef490cf1b6240921cf745" }, { "file": "additional_lights-1.19-2.1.6.jar", "hash": "ad93d3788a52429361ce78dbd8ead11a" }, { "file": "AdvancedPeripherals-0.7.25r.jar", "hash": "b1a0bd6ed275608e57dfca7e7a661639" }, { "file": "AI-Improvements-1.19.2-0.5.2.jar", "hash": "20eb1671a51e7741e539e85e8ce46b54" }, { "file": "AkashicTome-1.6-23.jar", "hash": "8d5a8714045f83f910856285d3ccbd96" }, { "file": "appleskin-forge-mc1.19-2.4.2.jar", "hash": "3cd43c763f6e9a244a115606faaecf4f" }, { "file": "Applied-Botanics-1.4.2.jar", "hash": "955f1f6bc95f148d6bde7c32e6f11bb7" }, { "file": "appliedenergistics2-forge-12.9.2.jar", "hash": "edbd47ad4f1f5d530b547874f87647c2" }, { "file": "architectury-6.5.69-forge.jar", "hash": "a3d786ffcf4333c068a2fc90dbea144b" }, { "file": "ars_creo-1.19.2-3.1.3.jar", "hash": "587d7a78b67ee45f7deb9d9a56958df0" }, { "file": "ars_nouveau-1.19.2-3.12.3.jar", "hash": "f3c32b5751c67c01aa6be7570f383c48" }, { "file": "AttributeFix-Forge-1.19.2-17.2.6.jar", "hash": "e88e6c2c26c6ff07c5297c37976bc937" }, { "file": "AutoRegLib-1.8.2-55.jar", "hash": "8d0cfc46ea0c7334ff511eff2bb3e9ce" }, { "file": "balm-forge-1.19.2-4.5.6.jar", "hash": "f6c51233bce3f6eca5fa94c0023a7594" }, { "file": "BambooEverything-forge-2.2.4-build.33+mc1.19.2.jar", "hash": "3a42586758f0a9d1771e7a67cdc4d9f7" }, { "file": "BetterF3-4.0.0-Forge-1.19.2.jar", "hash": "7d0b017c4a601fdc99d99e461b45a2b4" }, { "file": "betterfpsdist-1.19.2-1.8.jar", "hash": "e8ffbd4c3c6b02700e43d410f03e9368" }, { "file": "BetterModsButton-v4.2.1-1.19.2-Forge.jar", "hash": "f8198296ff96df56cdcfd8b32362efdc" }, { "file": "biggerreactors-1.19.2-0.6.0-beta.6.1.jar", "hash": "02268a9a7cb41f5f23b68e278cbc9298" }, { "file": "BiomesOPlenty-1.19.2-17.1.2.492.jar", "hash": "9568043eef467bd0757bf51f990b30de" }, { "file": "blueprint-1.19.2-6.1.2.jar", "hash": "60f930a556ed7de262515a3e082fd272" }, { "file": "BoatBreakFix-Universal-1.0.11.jar", "hash": "6411bd1f50792a04f73e359c704f0b6a" }, { "file": "boatload-1.19.2-4.2.1.jar", "hash": "5bdbc387d268a4d6f77e7d8a39aeba46" }, { "file": "Bookshelf-Forge-1.19.2-16.2.18.jar", "hash": "57c9034e0d377aa83fe042c42e5ef555" }, { "file": "Botania-1.19.2-438-FORGE.jar", "hash": "af461c0be4435d488af3e981c0ce2e8e" }, { "file": "buildinggadgets-3.16.2-build.22+mc1.19.2.jar", "hash": "743016fd5346704dd136f78fbb3d1a58" }, { "file": "bwncr-forge-1.19.2-3.14.1.jar", "hash": "7c0a939924f4eee71012b56d4a5c8aec" }, { "file": "canary-mc1.19.2-0.1.9.jar", "hash": "5a524533dd35e1e404f9af69b66d8faf" }, { "file": "carryon-forge-1.19.2-2.0.5.10.jar", "hash": "c257631e815c1ad3528dda783955829e" }, { "file": "catalogue-1.7.0-1.19.2.jar", "hash": "ff525a8e6c0378579e8e3181ae712c2a" }, { "file": "cc-tweaked-1.19.2-1.101.2.jar", "hash": "0b0f6e644fdaf795d971bbc8f4a1fef1" }, { "file": "ChanceCubes-1.19.2-5.0.2.475.jar", "hash": "f4187903345ae645cdda0966145a0a95" }, { "file": "ChickenChunks-1.19.2-2.9.4.97-universal.jar", "hash": "78af53659ad810d353fa4eae45505eac" }, { "file": "chisels-and-bits-forge-1.3.135.jar", "hash": "e8d4118737642c007696559fce9fc143" }, { "file": "Chunk Pregenerator-1.19-4.2.2.jar", "hash": "d50f160b11022cb2e870a00827ace9e6" }, { "file": "Chunk+Pregenerator-1.19-4.2.2.jar", "hash": "d50f160b11022cb2e870a00827ace9e6" }, { "file": "ClickMachine-1.19.2-7.0.0.jar", "hash": "9b603a24333ebdfb083ab8d07877b2ea" }, { "file": "cloth-config-8.2.88-forge.jar", "hash": "9ad6b6c3b72a0d23d53c7b761782082b" }, { "file": "Clumps-forge-1.19.2-9.0.0+14.jar", "hash": "bdf6d74aadb9d5e5b0167a40ad0ad90d" }, { "file": "CodeChickenLib-1.19.2-4.3.1.481-universal.jar", "hash": "eaa9cd0b0543f8a7ca6951828a3422a2" }, { "file": "cofh_core-1.19.2-10.2.1.40.jar", "hash": "a6002a8f81dc1fe426c5a53ec45853bd" }, { "file": "collective-1.19.2-6.53.jar", "hash": "554042b4d4ffbb67d6bf053f0c37daef" }, { "file": "ColossalChests-1.19.2-1.8.4.jar", "hash": "7fa77cea4e6ae931877703161248667f" }, { "file": "comforts-forge-6.0.4+1.19.2.jar", "hash": "35630f134c891a908e6c6b62bcd0a23a" }, { "file": "compactmachines-5.1.0.jar", "hash": "bd37b96f16fe71ed76198e742b690204" }, { "file": "configured-2.0.1-1.19.2.jar", "hash": "6ac94eef8fd10d34b7dc5c9d4016f922" }, { "file": "connectedglass-1.1.6-forge-mc1.19.jar", "hash": "95b8abdb1e5a586bf8bdffbfed1654b3" }, { "file": "connectivity-1.19.2-3.4.jar", "hash": "533c24d77e3cc579cca39fc1d380bb9d" }, { "file": "constructionwand-1.19.2-2.10.jar", "hash": "c0cc17a90298505d707ebd5f49229863" }, { "file": "Controlling-forge-1.19.2-10.0+7.jar", "hash": "a1806659c98d659f6daad51a6673671a" }, { "file": "cookingforblockheads-forge-1.19.2-13.3.1.jar", "hash": "cc24cc2a37181770a736ffbd68219897" }, { "file": "corail_woodcutter-1.19.2-2.5.2.jar", "hash": "0f2247554705a4ffe6338673ef636ad8" }, { "file": "corpse-1.19.2-1.0.0.jar", "hash": "48c6552127e8aa4a6ba9b9d75aabbf6f" }, { "file": "CosmeticArmorReworked-1.19.2-v1a.jar", "hash": "04e67c8f93e7121efb0b34d96db6370c" }, { "file": "craftingtweaks-forge-1.19-15.1.6.jar", "hash": "cbb9fb34145eef6e728b73fa717b01f5" }, { "file": "create-1.19.2-0.5.0.i.jar", "hash": "b4c336a51c1ccb578917efba4322a44b" }, { "file": "create-stuff-additions1.19.2_v2.0.2b.jar", "hash": "4e982c2c9ed1c9675ecf8dce69148dc6" }, { "file": "createaddition-1.19.2-20230315b.jar", "hash": "316e95cc5aa849522f9d9fdea3a1de98" }, { "file": "createdeco-1.2.12-1.19.2.jar", "hash": "3d1513b068338c26571691e40e3cec9c" }, { "file": "Cucumber-1.19.2-6.0.6.jar", "hash": "c5980899883e5cbe3a81c0eec6732001" }, { "file": "curios-forge-1.19.2-5.1.3.0.jar", "hash": "c6ec55c963c24d46d98749bd47abc151" }, { "file": "Cyclic-1.19.2-1.7.14.jar", "hash": "db2d5801c15945a034f8ff5f2022523e" }, { "file": "CyclopsCore-1.19.2-1.18.2.jar", "hash": "90c35f2d30038604ce60e92b52861bc0" }, { "file": "DarkPaintings-Forge-1.19.2-13.1.5.jar", "hash": "12c7aebd7aa466cec02c217df28288f6" }, { "file": "DarkUtilities-Forge-1.19.2-13.1.7.jar", "hash": "dac542ba1f5457827bd45f8a221bc9dd" }, { "file": "Decorative Blocks-forge-1.19.2-3.0.0.jar", "hash": "16935a215d03c37dd3e494afc21cc6ac" }, { "file": "deeperdarker-forge-1.1.6-forge.jar", "hash": "620368d37dffa4e8c9b63d1117313d31" }, { "file": "DeLogger-4.7.0-build.9+mc1.19.2.jar", "hash": "ddc505fc1bc65110e5804552bc03e675" }, { "file": "DustrialDecor-1.3.3-1.19.2.jar", "hash": "844640333a87e1d8163f18be5574906f" }, { "file": "dynamiclights-1.19.2.1.jar", "hash": "9bb24a5d845a29bd899c6ce49b8ae416" }, { "file": "dynamiclightsreforged-1.19.2_v1.4.0.jar", "hash": "67f6b3118439adc4e56724c78001e981" }, { "file": "dynview-1.19.1-2.9.jar", "hash": "971a4540ad5d9a942184779e0347a8d5" }, { "file": "elevatorid-1.19.2-1.8.9.jar", "hash": "073b3361ce1fdd45e8b03c3c9a713d32" }, { "file": "EnchantmentDescriptions-Forge-1.19.2-13.0.14.jar", "hash": "dc341c92952f6b6c790b6e1c61a1e15c" }, { "file": "enderchests-forge-1.19.0-1.10.1.01.jar", "hash": "890183512aaceffb9ad94c44318d5a7a" }, { "file": "EnderStorage-1.19.2-2.10.1.181-universal.jar", "hash": "75d4cdf7dce4a676cbf9dbfd998e7a13" }, { "file": "endertanks-forge-1.19.0-1.12.1.02.jar", "hash": "db12804d33c64aeb8a66b05927ab703f" }, { "file": "energymeter-1.19.2-1.0.0.jar", "hash": "182a7cfce22d2aa4d9a282d82ba7e1b9" }, { "file": "entangled-1.3.13-forge-mc1.19.jar", "hash": "17b10ac8411b7a9f7c80dc71448f3b1d" }, { "file": "entityculling-forge-1.6.1-mc1.19.2.jar", "hash": "094f1d0f3aad06ee4c5bb0c3f8a208d5" }, { "file": "Entity_Collision_FPS_Fix-forge-1.19-2.0.0.0.jar", "hash": "f7adf3c46c9af07674b09a55c9e03288" }, { "file": "ExperienceBugFix-1.19-1.41.2.3.jar", "hash": "8a2d3926fd50472777fcf50f3f72fb6f" }, { "file": "farmingforblockheads-forge-1.19.2-11.2.0.jar", "hash": "827f733e109235670d6fd0f57590baf8" }, { "file": "FastFurnace-1.19.2-7.0.0.jar", "hash": "5999d492e5731cde00560b25ca85aa51" }, { "file": "Fastload+1.19.2-2.6.11.jar", "hash": "20182811d0a22df5d747e523b5967a28" }, { "file": "Fastload-Reforged-2.6.9+1.19.2.jar", "hash": "58fecbf9b18c250976bc18368dd9f6ce" }, { "file": "FastSuite-1.19.2-4.0.0.jar", "hash": "30c7938e0f99d38422cdfadecb0e1b23" }, { "file": "FastWorkbench-1.19.2-7.0.1.jar", "hash": "b12209e9f7f75d1d80616881e18d22c1" }, { "file": "ferritecore-5.0.3-forge.jar", "hash": "c556facc604bd4fc0824c4524c73b9b9" }, { "file": "findme-3.1.0-forge.jar", "hash": "ebfd628c8bb79c5e6c76579d51de1c5f" }, { "file": "flickerfix-1.19.1-3.1.0.jar", "hash": "5e205a03f453ab647bab511ba020781c" }, { "file": "FluxNetworks-1.19.2-7.1.3.12.jar", "hash": "08544c41d9009c32d1a9bca7db87ed50" }, { "file": "flywheel-forge-1.19.2-0.6.8.a.jar", "hash": "0052ed4ee7075110eff6c005a2fe44d8" }, { "file": "FpsReducer2-forge-1.19.2-2.1.jar", "hash": "eb3eacbd713dbd9b333cfa210a700a35" }, { "file": "ftb-chunks-forge-1902.3.18-build.248.jar", "hash": "0f37d81cde24f1be93468f3da91e450d" }, { "file": "ftb-essentials-1902.1.10-build.47.jar", "hash": "73d04ed8f950e464ebd5a3b5c4f15598" }, { "file": "ftb-library-forge-1902.3.15-build.188.jar", "hash": "b513e267c3979285b8746f66f32fa3ec" }, { "file": "ftb-teams-forge-1902.2.12-build.95.jar", "hash": "ab488c1e04da53b3306260dd913fc378" }, { "file": "ftbbackups2-forge-1.19.2-1.0.18.jar", "hash": "65b7c029cddb4e55e0bc542e7a8bdae4" }, { "file": "fuelgoeshere-1.19.2-0.1.0.0.jar", "hash": "5cb3f43d2d1f496844446e159a2715e9" }, { "file": "functionalstorage-1.19.2-1.1.3.jar", "hash": "a2e76c637b8c9a2b7ed4b9c0ad452e19" }, { "file": "GameMenuModOption-1.19-1.18.jar", "hash": "7ef765acd05512a589ec458b29a22db4" }, { "file": "geckolib-forge-1.19-3.1.40.jar", "hash": "99b50d68f49918186714abf7746f0249" }, { "file": "glassential-forge-1.19-1.2.4.jar", "hash": "3079d22f08e17c33e94346e106a8c003" }, { "file": "HammerLib-1.19.2-19.3.56.jar", "hash": "6a52c8b34a24381a597c8a3a21e8679c" }, { "file": "handcrafted-forge-1.19.2-2.0.6.jar", "hash": "3ce1be672229199442122041267d8ba1" }, { "file": "harvestwithease-1.19.2-6.0.0.0-final-forge.jar", "hash": "158ac7bfc624ef37a9af9b684fd41678" }, { "file": "healingcampfire-1.19.2-5.1.jar", "hash": "e2e629c7110c8e8de6815943e76bd75b" }, { "file": "HealthOverlay-1.19.2-7.2.1.jar", "hash": "f0ccd8519848bef8b1b5a39ee09017c5" }, { "file": "Highlighter-1.19.1-1.1.4.jar", "hash": "d3517756318585f9c60c8bafd2dbc13e" }, { "file": "Iceberg-1.19.2-forge-1.1.4.jar", "hash": "f11f7ab27b5391e838562cb86a8908dc" }, { "file": "ImmersiveEngineering-1.19.2-9.2.0-162.jar", "hash": "9526881b7fd1bb9e273a92656ed3ca6c" }, { "file": "industrial-foregoing-1.19.2-3.3.2.2-4.jar", "hash": "2cabe9992a10dcefa76e1b087cb1b9e6" }, { "file": "ironchest-1.19.2-14.2.7.jar", "hash": "7e2cee5753aeb0c9013fba2d54d55e35" }, { "file": "ironchests-3.1.1-forge.jar", "hash": "5acd9df015a2a0ca259f7676bb807756" }, { "file": "ironfurnaces-1.19.2-3.6.5.jar", "hash": "6256aa278bb431b802ebca4255903efa" }, { "file": "IronJetpacks-1.19.2-6.0.3.jar", "hash": "3e68729755aca0ed2f76cdaf597450ae" }, { "file": "jei-1.19.2-forge-11.6.0.1013.jar", "hash": "f882610bd9ec942cfce7f2b3f536243e" }, { "file": "JER-Integration-4.3.1.jar", "hash": "f93bd216427d4b9bda8b432ce84e6896" }, { "file": "jmi-forge-1.19.2-0.13-33.jar", "hash": "f4811298566ba0aff625136ee29d392d" }, { "file": "journeymap-1.19.2-5.9.4-forge.jar", "hash": "7198008167de5ff6ad8c18db084c3bbf" }, { "file": "jumpboat-1.19-0.1.0.5.jar", "hash": "45624fc639f304faabe059688caf45f4" }, { "file": "JustEnoughResources-1.19.2-1.2.2.200.jar", "hash": "6565c7bc18b6dd59bfdd0b779c23fd1f" }, { "file": "kleeslabs-forge-1.19.2-12.2.0.jar", "hash": "df46948191dacbdddbd1b6ad741a8312" }, { "file": "Ksyxis-1.1.jar", "hash": "f73eb71367fd65a53d0976ad08afa595" }, { "file": "laserio-1.5.2.jar", "hash": "dd16e3dce32e328e949bd360e4c251d1" }, { "file": "lazydfu-1.19-1.0.2.jar", "hash": "e395095b221c320c50105e8d447c6ce0" }, { "file": "letmedespawn-1.18.x-1.19.x-forge-1.0.3.jar", "hash": "2288ebda20fd3a66a89558f1c2543849" }, { "file": "light-overlay-7.0.1-forge.jar", "hash": "f5531b81b4a83b1fee79321156cf8b36" }, { "file": "Log-Begone-Forge-1.19-1.0.5.jar", "hash": "b18e6a58fe0a323fae6025d67eb71ffa" }, { "file": "logprot-1.19.2-1.9.jar", "hash": "9d86d511120365d328be7f8849a9f179" }, { "file": "luggage-1.19-1.6.jar", "hash": "9209b3cb9f267c570db9a4eb36f7d622" }, { "file": "mcjtylib-1.19-7.1.5.jar", "hash": "2b3bf0b3a66dff83eba03e994def574c" }, { "file": "mcw-bridges-2.0.7-mc1.19.2forge.jar", "hash": "0f592fa7822c0bed5d70c905011f0a96" }, { "file": "mcw-doors-1.0.9forge-mc1.19.2.jar", "hash": "fc11e433b640272bb93e4a2f0c67a6df" }, { "file": "mcw-fences-1.0.7-mc1.19.2forge.jar", "hash": "14ed100a49c14ab40e900334a7fda62c" }, { "file": "mcw-roofs-2.2.3-mc1.19.2forge.jar", "hash": "5c7b073366f6b79a133d349abcdc08ad" }, { "file": "mcw-trapdoors-1.0.9-mc1.19.2forge.jar", "hash": "90c096edf8d569b26a2b39734421aea9" }, { "file": "mcw-windows-2.1.1-mc1.19.2forge.jar", "hash": "42c85f017b1c0cbe17d4ac5a8e49cce8" }, { "file": "Mekanism-1.19.2-10.3.8.477.jar", "hash": "918d7dbf362ad84fd955c26f571d5e0e" }, { "file": "MekanismAdditions-1.19.2-10.3.8.477.jar", "hash": "b5976ec0bb4c54de31a4d87505ed62c4" }, { "file": "MekanismGenerators-1.19.2-10.3.8.477.jar", "hash": "857fbd6606eec2387b739fc21f4e98fb" }, { "file": "MekanismTools-1.19.2-10.3.8.477.jar", "hash": "fc365517adb825eb97b7c55f2d1d458b" }, { "file": "mob_grinding_utils-1.19.2-0.4.47.jar", "hash": "acac03d7c9e0692a3ff718161ce26b5f" }, { "file": "modelfix-1.8.jar", "hash": "94dd393d878d22be69f6f8fb90361572" }, { "file": "modnametooltip-1.19-1.19.0.jar", "hash": "78c0a13a097b0c5aa944cf851f736433" }, { "file": "modonomicon-1.19.2-1.30.0.jar", "hash": "ae6e4dc5105edd7abc41a4160f5fc0bd" }, { "file": "modular-routers-1.19.2-10.2.0-3.jar", "hash": "324e29386dbd57d764e1976e6dea06c8" }, { "file": "moonlight-1.19.2-2.2.26-forge.jar", "hash": "9d7e7e7a463fc0fc90835a6e2f15a63c" }, { "file": "MouseTweaks-forge-mc1.19-2.23.jar", "hash": "855222f31f7a2ebfe84cd57480b9e011" }, { "file": "MultiMine-1.19.2.3.jar", "hash": "e91047053ec4566f3e15e6c32bd4f824" }, { "file": "NaturesAura-38.0.jar", "hash": "3c8cb6f3f3d70a7b5d11997b48cd9d8b" }, { "file": "NaturesCompass-1.19.2-1.10.0-forge.jar", "hash": "629b8abab8951d46c2ad078f3f12553a" }, { "file": "Neat-1.19-32.jar", "hash": "99a105dd7d9ec551544171d721963428" }, { "file": "netherportalfix-forge-1.19-10.0.1.jar", "hash": "8f3d4e86dad9fe2b80eb1c1bdb570508" }, { "file": "NoChatReports-FORGE-1.19.2-v1.5.1.jar", "hash": "05dcb9bf88cd31a942ea8b686ddca0de" }, { "file": "occultism-1.19.2-1.73.2.jar", "hash": "8cea0c6cb727ebdef922770dcf4ffb0d" }, { "file": "OreExcavation-1.11.166.jar", "hash": "256c12add0e73bc01125c48d7d01be73" }, { "file": "overloadedarmorbar-1.19.3-7.1.jar", "hash": "c5192b598e70e5e3f581d97670cf5bf0" }, { "file": "Patchouli-1.19.2-77.jar", "hash": "5727784bad9e215a74a64107c1e45036" }, { "file": "personality-1.19-3.0.1.jar", "hash": "2f7585e3d757a6c8c3f8f0cd8efa1d87" }, { "file": "phosphophyllite-1.19.2-0.6.0-beta.7.jar", "hash": "7794e84e0acc39c92f79c2e2bead7e9a" }, { "file": "PickUpNotifier-v4.2.4-1.19.2-Forge.jar", "hash": "607d4a3d1bbf7d8a83cb137a0d3d579c" }, { "file": "pipez-1.19.2-1.0.1.jar", "hash": "51c4ad8ef7fa192865275f6e4ef096ea" }, { "file": "Placebo-1.19.2-7.1.5.jar", "hash": "8dd835b0575703484c6f1a9594dd4ba7" }, { "file": "Placebo-1.19.2-7.1.7.jar", "hash": "ba2d8d78d1fdb5e40bd7e28ce68903c0" }, { "file": "pneumaticcraft-repressurized-1.19.2-4.3.3-22.jar", "hash": "d4764174ff520ae3e1dbc29ff5fb3fdb" }, { "file": "polylib-forge-1900.0.2-build.42.jar", "hash": "c21c0c5b6ef36e51ea0d4404ac936e6e" }, { "file": "PuzzlesLib-v4.3.12-1.19.2-Forge.jar", "hash": "a02805a1974fe85820a04d053f6148ca" }, { "file": "Quark-3.4-394.jar", "hash": "efabd42d6f33c5073d9783a5f88d5fb8" }, { "file": "quartz-1.19.2-0.1.0-beta.2.jar", "hash": "67465294cb953af7012015ea8c255f9f" }, { "file": "rangedpumps-1.0.0.jar", "hash": "4228278290ef37795c3fb32df62f0fa9" }, { "file": "rechiseled-1.0.12a-forge-mc1.19.jar", "hash": "7cbdb3257ced5f9d8826ade5ced69999" }, { "file": "refinedcooking-3.0.3.jar", "hash": "7833cf4d97f765df2ea3db74d05a7287" }, { "file": "refinedstorage-1.11.5.jar", "hash": "79474af6c3bb480cc97662bd874d51db" }, { "file": "refinedstorageaddons-0.9.0.jar", "hash": "934dfe7bd5c6f73e66e064e31e6729c5" }, { "file": "repurposed_structures_forge-6.3.18+1.19.2.jar", "hash": "1915f121791a1901aa9be82955e4ca53" }, { "file": "resourcefullib-forge-1.19.2-1.1.23.jar", "hash": "8c9d83be6fbe1bf54c1f00a1f382e3fd" }, { "file": "rftoolsbase-1.19.1-4.1.5.jar", "hash": "21d0ddabb0908c80d5711dc2139d1352" }, { "file": "rubidium-0.6.2a.jar", "hash": "52245d079adf96ddacc61cc90e2f8c7c" }, { "file": "sapience-1.19-1.1.0.jar", "hash": "2032f8a0f84a227dc5a7ce8b80d192a6" }, { "file": "saturn-mc1.19.2-0.0.1.jar", "hash": "e454697ca2a44e229a78fcbbd795f074" }, { "file": "seamless_loading_screen-1.19.2-4.0.1.jar", "hash": "ac6b180d59ba16b8d733d556d836e538" }, { "file": "sebastrnlib-2.0.2.jar", "hash": "d46411dc03af8bfc4badb08238c2110d" }, { "file": "ServerTabInfo-1.19.1-1.3.7.jar", "hash": "95f1dc96e4ed6985a03c1cbef705afeb" }, { "file": "shetiphiancore-forge-1.19.0-3.11.3.01.jar", "hash": "17b42d904e310850fe63236e7167f8cb" }, { "file": "shroomdealers_1.6-1.19.2-forge.jar", "hash": "92a6f338ac46f1d4cdf1e03a83d0a0fa" }, { "file": "shutupexperimentalsettings-1.0.5.jar", "hash": "a682b7a2b00a0a31466e9b97cf73947e" }, { "file": "sit-1.19-1.3.3.jar", "hash": "bc4b64e6635fbbe510c5f2506a967068" }, { "file": "SlabMachines-1.19.2-1.1.4.jar", "hash": "dda4dbdac0c50fcc7474802aabf9f973" }, { "file": "SmartBrainLib-forge-1.19.2-1.8.1.jar", "hash": "c2d5aaa092ed11ab79cb7009dfdb6792" }, { "file": "smoothboot(reloaded)-mc1.19.2-0.0.2.jar", "hash": "2c3991ba99d64a96e6824b9f32b3b95b" }, { "file": "smoothchunk-1.19.1-2.0.jar", "hash": "241ab1a282f91bea2681c716e46abd40" }, { "file": "SoL-Carrot-1.19.2-1.14.0.jar", "hash": "a5cf63bcce40d865714eb30347b83210" }, { "file": "SolarFluxReborn-1.19.2-19.3.9.jar", "hash": "15e07f277c0f37a35631bad4af5f6a9a" }, { "file": "sophisticatedbackpacks-1.19.2-3.18.40.779.jar", "hash": "f291c1a8c9e0b5bffc7753f2fb3bee1f" }, { "file": "sophisticatedcore-1.19.2-0.5.38.203.jar", "hash": "fa062ff72f426a0f670b6d888ab8db67" }, { "file": "sophisticatedstorage-1.19.2-0.6.16.276.jar", "hash": "1fdf1da99d69350f4c79b2a4330b1fdd" }, { "file": "soundphysics-forge-1.19.2-1.0.18.jar", "hash": "3682207a29510800639546cf5598364d" }, { "file": "StorageDrawers-1.19-11.1.2.jar", "hash": "3f65972ac73962b980a5c7facf24292e" }, { "file": "supermartijn642configlib-1.1.6b-forge-mc1.19.jar", "hash": "559d896dad9316c3fc8ce1de245d9c4d" }, { "file": "supermartijn642corelib-1.1.5-forge-mc1.19.jar", "hash": "450370918c23b0a95af823a7e46ce61f" }, { "file": "supplementaries-1.19.2-2.2.63.jar", "hash": "6337a60b174c426c2c9e272a8201ae77" }, { "file": "swingthroughgrass-1.19.2-1.10.0.jar", "hash": "d822b909ab3a9728592a6572c4a3145b" }, { "file": "systeams-1.2.3.jar", "hash": "359880e710ad084979e3e83310528b1c" }, { "file": "TerraBlender-forge-1.19.2-2.0.1.136.jar", "hash": "ed2fe6eb99f5d399db71e71f209de2ac" }, { "file": "theoneprobe-1.19-6.2.2.jar", "hash": "67f217c81b311f2c5131758f8c37cefd" }, { "file": "thermal_cultivation-1.19.2-10.2.0.17.jar", "hash": "c7048eaa3430a8f6a6e4ab2cf419c898" }, { "file": "thermal_dynamics-1.19.2-10.2.1b.14.jar", "hash": "f19e3af11993e1f1c2185986635e8203" }, { "file": "thermal_expansion-1.19.2-10.2.0.21.jar", "hash": "601d90020bfb843d4a1988a481a919e6" }, { "file": "thermal_foundation-1.19.2-10.2.0.47.jar", "hash": "4593c1fa6f84796665484abe564a7bf1" }, { "file": "thermal_innovation-1.19.2-10.2.0.18.jar", "hash": "7ca577f15f2665d0d866e20e02dd73fb" }, { "file": "thermal_integration-1.19.2-10.2.0.17.jar", "hash": "ad6f4cc252afb894faf1bea69317e082" }, { "file": "thermal_locomotion-1.19.2-10.2.0.14.jar", "hash": "f2eab7b62732f749f58c60025d682163" }, { "file": "time-in-a-bottle-3.0.1-mc1.19.jar", "hash": "508168af8ed79a40a42d7ea0263cec57" }, { "file": "titanium-1.19.2-3.7.2-26.jar", "hash": "5fe8d7a7ab41e16552bd83eac4a612fc" }, { "file": "ToastControl-1.19.2-7.0.0.jar", "hash": "bd7091d48d6f68d1d61b9c9446ab1e8b" }, { "file": "ToolBelt-1.19.2-1.19.7.jar", "hash": "b6ca76a8fc008ed782982fbb66a352bc" }, { "file": "torchmaster-19.2.0.jar", "hash": "055321d4540a487398919ecc6c4493db" }, { "file": "trashcans-1.0.17a-forge-mc1.19.jar", "hash": "0fb21b2307f560b2b57bb61c31015f52" }, { "file": "Vampirism-1.19.2-1.9.3.jar", "hash": "2fbdc131317914317b75e02d5c725f15" }, { "file": "VisualWorkbench-v4.2.4-1.19.2-Forge.jar", "hash": "d23680b419036187552f8d5a8a6d3312" }, { "file": "voicechat-forge-1.19.2-2.3.28.jar", "hash": "d50859ce7d19a54d764566c1a330ce22" }, { "file": "waystones-forge-1.19.2-11.3.1.jar", "hash": "d11288066796af8360da63e80370e6b6" }, { "file": "xlpackets-1.18.2-2.1.jar", "hash": "ee7f9b5dec68637fb20ba3849b2bff10" }, { "file": "YungsApi-1.19.2-Forge-3.8.9.jar", "hash": "12712e180c8e7acb45ce7530b897c9ee" }, { "file": "YungsBetterDesertTemples-1.19.2-Forge-2.2.2.jar", "hash": "94d1f62e9247c0f9ffe4aca5eb2eaad5" }, { "file": "YungsBetterDungeons-1.19.2-Forge-3.2.2.jar", "hash": "23c0c4dda050b0ac7b3893f6081d925d" }, { "file": "YungsBetterMineshafts-1.19.2-Forge-3.2.0.jar", "hash": "e4b85013323e1cf4800267cd919fb928" }, { "file": "YungsBetterOceanMonuments-1.19.2-Forge-2.1.0.jar", "hash": "4cf44b2afd9f67cc23a71cbf767d46b8" }, { "file": "YungsBetterStrongholds-1.19.2-Forge-3.2.0.jar", "hash": "daa46493c03703aa9f6994548b43518f" }, { "file": "YungsExtras-1.19.2-Forge-3.1.0.jar", "hash": "95e19cc18b2ff87e2138100ef077e849" }]

    var test
    var items

    var seperators = []

    var loadingContent = false

    var firstLoad = true

    var itemBox = document.querySelector(".flex-1 > .flex > div:nth-last-child(2)")

    Array.from(document.querySelectorAll("div > div > .my-2 > div")).forEach(async (mod, index) => {
        //if (index == 1) {
        await generateDownloadButtons(mod)
        //}

    })
    var items = Array.from(itemBox.children)
    var lastItem = items[items.length - 1]

    var secondToLastItem = items[items.length - 2]

    lastItem.style = "border-bottom: solid 6px green;"

    seperators.push(lastItem)

    async function generateDownloadButtons(mod) {
        var modLink = mod.querySelector("div > div > a").href
        await fetch(modLink.replace("/download", "") + '/files/all?filter-game-version=' + urlParams.get("filter-game-version")).then(async response => {
            response.text().then(async response => {
                var files = new DOMParser().parseFromString(response, 'text/html').querySelectorAll("tbody > tr")
                var latestFabric = null
                var latestForge = null
                var latestNameForge = null
                var latestNameFabric = null
                var md5
                var modInstalled = false
                for (var file of files) {
                    var name = file.querySelector("td > a").textContent
                    var link = file.querySelector("td > a").href
                    var extraversions = file.querySelector(".extra-versions").title

                    if (hashes.find(h => h.file.includes(name)) && !modInstalled) {
                        //console.log(`%cMOD IS INSTALLED! [FILENAME CHECKED] ${name}`,
                        //    "color:green;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                        modInstalled = true
                    }



                    var found = false

                    if (!latestFabric && (name.toLowerCase().includes("fabric") || extraversions.includes("Fabric"))) {
                        console.log(`%cFABRIC FOUND ${link}`,
                            "color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                        latestFabric = link
                        found = true
                    }
                    if (!latestForge && (name.toLowerCase().includes("forge") || extraversions.includes("Forge"))) {
                        console.log(`%cFORGE FOUND ${link}`,
                            "color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                        latestForge = link
                        //latestNameForge = name
                        found = true
                    }
                    if ((!latestFabric && !latestForge)) {
                        console.log("FAILED TO FIND BOTH FABRIC AND FORGE IN FILE NAMES")
                        //console.log(`%cNLFNLF ${link}`,
                        //    "color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                        let response = await fetch(link)
                        response = await response.text()
                        var modLoader = new DOMParser().parseFromString(response, 'text/html').querySelector(".flex.-m-1.flex-wrap > div > span")
                        //latestName = new DOMParser().parseFromString(response, 'text/html').querySelector(".mb-4 > .flex .flex.pb-4 > div > span:nth-of-type(2)").textContent

                        //console.log(`%cFOUND A NAME: ${link} ${latestName}`,
                        //"color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")

                        console.log(modLoader.textContent)

                        if (modLoader.textContent == "Fabric" && !latestFabric) {
                            //console.log(`%cAEBC ${link}`,
                            //    "color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                            latestFabric = link
                        } else if (modLoader.textContent == "Forge" && !latestForge) {
                            //console.log(`%cSHIT ${link}`,
                            // "color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                            //latestNameForge = new DOMParser().parseFromString(response, 'text/html').querySelector(".mb-4 > .flex .flex.pb-4 > div > span:nth-of-type(2)").textContent.replace("+","%2B")
                            latestForge = link
                            //latestNameForge = name
                        } else if (!latestForge && !latestFabric) {
                            console.log("NO MOLAODER TAGS FOUND ASSUMING FORGE!")
                            //console.log(`%cFUCK ${link}`,
                            //    "color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")
                            latestForge = link
                            //latestNameForge = name
                        }
                        if (!latestForge) {
                            md5 = new DOMParser().parseFromString(response, 'text/html').querySelector("article > div >div:last-child > .text-sm:last-child").textContent.replace("+", "%2B")
                        }

                    }
                }

                function createDLButton(text, link, color, latestName, latestLink) {
                    var div = document.createElement("div")
                    div.classList.add("px-1")
                    div.style = "cursor:pointer"

                    div.innerHTML = `<a style="background-color:${color}" ${latestName ? `href="${link}"` : ``} class="button button--hollow" data-tooltip="Download ${text}">
                    <span class="button__text"><svg style="display: inline;" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <g id="Action/Download">
                    <path id="Download" fill-rule="evenodd" clip-rule="evenodd" d="M11.9989 7.97269H14.0369C14.4409 7.97269 14.8069 8.21669 14.9609 8.58969C15.1159 8.9637 15.0299 9.39369 14.7439 9.67969L10.7189 13.7257C10.5309 13.9127 10.2769 14.0187 10.0119 14.0187C9.7459 14.0187 9.4919 13.9127 9.3049 13.7257L5.2789 9.67969C4.9929 9.39369 4.9079 8.9637 5.0629 8.58969C5.2169 8.21669 5.5819 7.97269 5.9859 7.97269H8.0049V2.99969C8.0049 2.44769 8.4519 1.99969 9.0049 1.99969H10.9989C11.5509 1.99969 11.9989 2.44769 11.9989 2.99969V7.97269ZM4 18H16C16.553 18 17 17.553 17 17C17 16.447 16.553 16 16 16H4C3.448 16 3 16.447 3 17C3 17.553 3.448 18 4 18Z"/>
                    </g>
                    </svg>${text}</span>
                    </a>`

                    //console.log(`%csusus ${latestLink} ${latestName}`,
                    //"color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")

                    if (!latestName) {
                        console.log(`%cNO LATEST NAME: ${latestLink}`,
                            "color:orange;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold; font-size:2em")
                        var downloadClick = async function (e) {
                            console.log("WAIT FOR ME!!!!!!!!!")
                            let response = await fetch(latestLink)
                            response = await response.text()
                            latestName = new DOMParser().parseFromString(response, 'text/html').querySelector(".mb-4 > .flex .flex.pb-4 > div > span:nth-of-type(2)").textContent
                            var modId = latestLink.split("/").at(-1)
                            var link = `https://mediafilez.forgecdn.net/files/${modId.slice(0, 4)}/${+modId.slice(4)}/${latestName.replace("+", "%2B")}`
                            div.querySelector("a").href = link
                            //console.log(link)
                            location.href = link
                            //window.open(link, '_blank')
                            //console.log("WAIT FOR ME!!!!!!!!!")
                            return false;
                        }
                        div.onclick = downloadClick

                        div.onmousedown = function (e) {
                            if (e && (e.which == 2 || e.button == 4)) {
                                console.log('middleclicked')
                                downloadClick()
                                e.preventDefault();
                            }
                        }

                        //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                        //console.log(div)
                        //console.log(latestLink)
                        //console.log(buttonContainer)
                    }

                    buttonContainer.insertBefore(div, buttonContainer.firstChild)
                    //console.log(div)
                }

                var buttonContainer = mod.querySelector(".flex.mb-2.-mx-1")
                buttonContainer.style.backgroundColor = "#3B3B3B"
                buttonContainer.style.padding = "5px"
                buttonContainer.style.borderRadius = "0px 5px 0px 5px"
                buttonContainer.style.marginBottom = "0"

                buttonContainer.style.borderStyle="none none solid solid"
                buttonContainer.style.borderColor="red"
                buttonContainer.style.borderWidth="1px"

                buttonContainer.querySelector(":first-child > div:last-of-type").remove()

                if (latestFabric) {
                    var modId = latestFabric.split("/").at(-1)
                    //console.log(latestName)
                    createDLButton("Fabric", `https://mediafilez.forgecdn.net/files/${modId.slice(0, 4)}/${modId.slice(4)}/${latestNameFabric}`, "#14BEBD", null, latestFabric)
                }
                if (latestForge) {
                    var modId = latestForge.split("/").at(-1)
                    //console.log(latestNameForge)

                    //console.log(`%cwawawa ${latestForge}`,
                    //"color:red;font-family:system-ui;-webkit-text-stroke: 1px black;font-weight:bold")

                    //console.log(modId)

                    createDLButton("Forge", `https://mediafilez.forgecdn.net/files/${modId.slice(0, 4)}/${modId.slice(4)}/${latestNameForge}`, "#be14a2",null, latestForge)
                    //console.log(buttonContainer.firstChild)
                }
                if (!md5 && !modInstalled) {
                    var link = latestForge
                    let response = await fetch(link)
                    //console.log(link)
                    response = await response.text()

                    md5 = new DOMParser().parseFromString(response, 'text/html').querySelector("article > div >div:last-child > .text-sm:last-child")?.textContent
                }
                if (md5 || modInstalled) {
                    //console.log(md5)
                    //mod.innerHTML=md5
                    var buttonsBox = mod.querySelector(".w-full")
                    var hash = hashes.find(h => h.hash == md5)
                    if (hash || modInstalled) {
                        mod.style.borderColor = "red";
                        //mod.style.display="none"
                        //mod.remove()
                    }
                    //console.log("MOD:")
                    //console.log(mod)
                    mod.style.position = "relative"
                    //mod.style.display = "inline-block";
                    mod.style.width = "100%"

                    var description = mod.children[1]
                    //console.log("DESC")
                    //console.log(description)
                    //description.style.color = "blue"

                    var toprightDiv = document.createElement("div")

                    var md5Element = document.createElement("span")

                    md5Element.textContent = md5

                    //md5Element.style.color = "orange"

                    //description.appendChild(md5Element)

                    toprightDiv.classList.add("toprightdiv")

                    var categorys = mod.querySelector(".flex.-mx-1")
                    //console.log(categorys)
                    //toprightDiv.appendChild(categorys)
                    
                    

                    categorys.style.position="absolute"
                    categorys.style.top="0px"
                    categorys.style.right="5px"

                    //toprightDiv.style.position = "absolute"
                    //toprightDiv.style.right = "0px"
                    //toprightDiv.style.top = "0px"
                    //toprightDiv.style.padding = "15px"

                    var cats = mod.querySelector(".flex.-mx-1:last-of-type")

                    cats.style.position="absolute"
                    cats.style.bottom="0px"
                    cats.style.right="5px"

                    cats.style.marginBottom="10px"
                    cats.style.marginRight="5px"


                    mod.appendChild(toprightDiv)

                    //mod.remove()
                }

                //itemBox.appendChild(item)
            })

            //console.log(window.location.pathname + "?" + urlParams.toString())
            //if (!firstLoad) window.history.pushState("", "", window.location.pathname + "?" + urlParams.toString());
        })
    }

    var actPage = 1

    window.onscroll = async function (ev) {
        //return
        if ((window.scrollY > (test?.offsetTop + test?.offsetHeight) || !test) && loadingContent == false) {
            console.log("Load", loadingContent)
            loadingContent = true
            pageNum = pageNum + 1
            urlParams.set("page", pageNum)
            let response = await fetch(window.location.origin + window.location.pathname + "?" + urlParams.toString())
            response = await response.text()

            var items = Array.from(new DOMParser().parseFromString(response, 'text/html').querySelectorAll(".px-2.flex-1 > .flex.flex-col > div > div > .my-2 > div"))
            for (const item of items) {
                item.classList.add("my-2")
                //item.style.display="none"
                itemBox.appendChild(item)
            }

            //console.log(itemBox)

            test = items[items.length - 15]

            firstLoad = false
            loadingContent = false

            for (const item of items) {
                //const myPromise = new Promise((resolve, reject) => {
                    //setTimeout(() => {
                        //resolve();
                    //}, 100);
                //});

                //await myPromise

                //await generateDownloadButtons(item)
                generateDownloadButtons(item)
            }

            items = Array.from(itemBox.children)
            //lastItem = items[items.length-1]

            /* test = items[items.length - 15]

            firstLoad = false
            loadingContent = false */

        }

        if ((window.scrollY > (lastItem.offsetTop + lastItem.offsetHeight)) && loadingContent == false) {
            console.log("CHANGE URL NOW!")

            items = Array.from(itemBox.children)
            lastItem = items[items.length - 1]
            lastItem.style = "border-bottom: solid 6px green;"
            seperators.push(lastItem)

            //window.history.pushState("", "", window.location.pathname + "?" + urlParams.toString());
            //actPage++
        }

        //console.log(items[items.length - 2])

        //if (secondToLastItem) {
        //console.log("CHECK!")
        //if ((window.scrollY < (lastItem.offsetTop + lastItem.offsetHeight))) {
        //    console.log(pageNum)
        //console.log("DECREMENT PAGE--------------------------------------------")
        //}
        //}

        console.log(actPage)

        var seperatorItem = seperators[actPage - 1]

        if (seperatorItem) {
            if ((window.scrollY < (seperatorItem.offsetTop + seperatorItem.offsetHeight))) {
                actPage--
                urlParams.set("page", +initPageNumber + actPage)
                window.history.pushState("", "", window.location.pathname + "?" + urlParams.toString());
            }
        }


        var seperatorItem = seperators[actPage]

        if (seperatorItem) {
            if ((window.scrollY > (seperatorItem.offsetTop + seperatorItem.offsetHeight))) {
                actPage++
                urlParams.set("page", +initPageNumber + actPage)
                window.history.pushState("", "", window.location.pathname + "?" + urlParams.toString());
            }
        }







    }
})();