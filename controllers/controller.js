const nodemodel = require('../models/model');

const nodecontroller = {
    getAll: async (req, res) => {
        try {
            const Alldata = await nodemodel.find();
            res.json(Alldata);
        } catch (error) {
            res.status(500).json({ error: 'error' });
        }
    },

    create: async (req, res) => {
        const { name, desc } = req.body;

        try {
            const newdata = await nodemodel.create({ name, desc });
            console.log('New Data:', newdata);
            res.json(newdata);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'error' });
        }
    },


    update: async (req, res) => {
        const { id } = req.params;
        const { name, desc } = req.body;

        try {
            const updatedata = await nodemodel.findByIdAndUpdate(
                id,
                { name, desc },
                { new: true }
            );

            if (!updatedata) {
                return res.status(404).json({ error: 'name not found' });
            }

            res.json(updatedata);
        } catch (error) {
            res.status(500).json({ error: ' Error' });
        }
    },
};

module.exports = nodecontroller;