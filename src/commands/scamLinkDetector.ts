module.exports = {
    name: "scamLinkDetector",
    description: "Detects scam links",
    run: (msg: any) => {
        const member = msg.author.id;
        if (msg.content.toLowerCase().includes("nitro is back") || msg.content.toLowerCase().includes("i leave from cs:go") || msg.content.toLowerCase().includes("nitro")) {
            msg.delete();
        }
    }
}
