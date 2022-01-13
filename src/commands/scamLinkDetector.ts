module.exports = {
    name: "scamLinkDetector",
    description: "Detects scam links",
    run: (msg: any) => {
        if (msg.content.toLowerCase().includes("discrode") || msg.content.toLowerCase().includes("i leave from cs:go") || msg.content.toLowerCase().includes("Who is first?") || msg.content.toLowerCase().includes("discrod") ||
        msg.content.includes("nitro") || 
        msg.content.toLowerCase().includes("n i t r o")) {
          msg.delete();
        }
    }
}
