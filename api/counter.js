// Vercel Serverless Function — Visit Counter Proxy
// Calls counterapi.dev server-side so no browser (Brave, Firefox, etc.) can block it.

module.exports = async (req, res) => {
    // Allow requests from the portfolio origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');

    try {
        const response = await fetch(
            'https://api.counterapi.dev/v1/sammusoni/portfolio123/up'
        );

        if (!response.ok) {
            throw new Error(`counterapi responded with ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json({ count: data.count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
