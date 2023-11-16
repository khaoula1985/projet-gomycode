const Tour = require("../models/tour");

module.exports.gettours = async (req, resp) => {
    try {
        const tours = await Tour.find();
        return resp.status(200).json(tours);
    } catch (error) {
        return resp.status(500).json({ msg: error.message });
    }
};

module.exports.gettoursbyid = async (req, resp) => {
    try {
        const { id } = req.params;
        const tourById = await Tour.findById(id);
        return resp.status(200).json(tourById);
    } catch (error) {
        return resp.status(500).json({ msg: error.message });
    }
};

module.exports.addtour = (req, resp) => {
    const { image, rating, price, destination, username } = req.body;
    const touradd = new Tour({
        image,
        rating,
        price,
        destination,
        username,
    });

    touradd
        .save()
        .then(() => {
            return resp.status(200).json({ msg: "tour added" });
        })
        .catch((e) => {
            return resp.status(404).json({ msg: e.message });
        });
};

// Import necessary modules and models

module.exports.edittour = async (req, resp) => {
    const { image, rating, price, destination } = req.body;
    const { id } = req.params;

    try {
        // Find the tour by ID
        const tour = await Tour.findById(id);

        if (!tour) {
            return resp.status(404).json({ msg: "Tour not found" });
        }

        // Check if the logged-in user is the creator of the tour
        const token = req.headers.authorization.split(' ')[1]; // Assuming the token is passed in the headers
        const decoded = jwt_decode(token);
        const userId = decoded.userId;

        if (tour.user.toString() !== userId) {
            return resp.status(403).json({ msg: "You don't have permission to edit this tour" });
        }

        // Update the tour excluding the 'username' field
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            image,
            rating,
            price,
            destination,
        });

        return resp.status(200).json({ msg: "Tour updated" });
    } catch (error) {
        console.error('Error in edittour:', error);
        return resp.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports.deletetour = (req, resp) => {
    const { id } = req.params;
    Tour.findByIdAndDelete(id)
        .then(() => {
            return resp.status(200).json({ msg: "tour deleted" });
        })
        .catch((e) => {
            return resp.status(404).json({ msg: e.message });
        });
};
