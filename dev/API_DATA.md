# Api data

Small explanation how the api is intended to work, might not be up-to-date.

Crafting recipes that you are learned, i.e. you can craft them, are referred as spells in WoW so using the same naming here.


Example spell:
{
    "diff": [ // difficulty: diff[0] = orange, diff[1] = yellow, diff[2] = green, diff[3] = grey
        0,
        70,
        90,
        110
    ],
    "lev": 70, // skill required to learn the recipe
    "name": "Enchant Bracer - Minor Health", // name of the recipe
    "reag": [ // list of reagents required to make
        {
            "c": 1, // number of reagents
            "id": 10940 // id of the reagent, should match to items
        }
    ],
    "sour": 1 // source where to learn the item
}

Example item:
{
    "name": "Iron Ore", // name of the item
    "sell": 150, // sell price in coppers
    "auction": 48888 // auction price in coppers
    // "buy": 600 // vendor price for the item in coppers
}

Item has either buy or auction, depending on if you should buy it from vendor or auction house.
Technically it's possible that buying vendor items from auction house could be cheaper but that is almost never the case and not reliable.
