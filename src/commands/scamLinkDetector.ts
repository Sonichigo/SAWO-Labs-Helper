module.exports = {
    name: "scamLinkDetector",
    description: "Detects scam links",
    run: (msg: any) => {
    if (msg.content.match(/https:\/.*\.gift\/.*/) !== null) 
      {
        msg.delete()
        }
    }
}
