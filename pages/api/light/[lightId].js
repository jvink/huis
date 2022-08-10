export default async function handler(req, res) {
    const { lightId } = req.query;

    const lightsResult = await fetch(`${process.env.HUE_BRIDGE_IP}${process.env.HUE_BASE_URL}light/${lightId}`, {
        headers: { 'hue-application-key': process.env.HUE_APP_KEY },
    });
    const result = (await lightsResult.json()).data;

    res.status(200).json(result);
}