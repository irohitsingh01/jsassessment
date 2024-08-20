/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// Create a variable to hold your NFTs
const nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (title, skinTone, clothingStyle) 
{
    const nftMetadata = {
        "title": title,
        "skinTone": skinTone,
        "clothingStyle": clothingStyle
    }
    nftCollection.push(nftMetadata);
    console.log("Minted: " + title);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs () 
{
    for(let i = 0; i < nftCollection.length; i++)
    {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Title: \t\t" + nftCollection[i].title);
        console.log("Skin Tone:   " + nftCollection[i].skinTone);
        console.log("Clothing Style:  " + nftCollection[i].clothingStyle);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() 
{
    console.log("\nTotal NFTs minted: " + nftCollection.length);
}

// Call your functions below this line
mintNFT("Aria", "Fair", "Casual");
mintNFT("Liam", "Olive", "Formal");
mintNFT("Noah", "Tan", "Sporty");
mintNFT("Emma", "Brown", "Traditional");
mintNFT("Sophia", "Pale", "Chic");

listNFTs();
getTotalSupply();
