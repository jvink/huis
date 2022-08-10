export default async function handler(req, res) {
    const lightsResult = await fetch(`https://192.168.2.7/clip/v2/resource/light`, {
        headers: {
            'hue-application-key': 'b3FPeWJbUbzIKt2lWfBkRFXVCWzRu1hwEl99rfPc',
        }
    });
    console.log('TEST DOING YES')

    res.send((await lightsResult.json()).data);
}