import PropTypes from "prop-types";

const SocialCard = ({ name, imageURL }) => {
  return (
    <div className="bg-white flex flex-col items-center gap-2 md:gap-4 py-4 rounded-lg hover:bg-primary text-black hover:text-white cursor-pointer">
      <img
        className="border md:border-2 border-gray rounded-full p-4 w-16 bg-white"
        src={imageURL}
        alt={name}
      />
      <p className="font-medium">{name}</p>
    </div>
  );
};

SocialCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default SocialCard;
