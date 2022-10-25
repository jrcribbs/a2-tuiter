import likesModel from "./LikesModel";
/**
 * Finds all tuits that given user liked.
 * @param uid id of user who likes tuits
 */
export const findTuitsUserLiked = (uid) => likesModel
    .find({ likedBy: uid })
    .populate('likedTuit', 'tuit')
    .populate('likedBy', 'username').exec();
/**
 * Finds all users who liked given tuit.
 * @param tid id of tuit with likes
 */
export const findUsersThatLikedTuit = (tid) => likesModel
    .find({ likedTuit: tid })
    .populate('likedTuit')
    .populate('likedBy', 'username')
    .exec();
/**
 * Count number of likes for given tuit.
 * @param tid id of tuit with likes
 */
export const findTuitLikesCount = (tid) => likesModel
    .find({ likedTuit: tid }).count();
/**
 * Creates new likes relationship.
 * @param uid id of user who likes
 * @param tid id of liked tuit
 */
export const userLikesTuit = (uid, tid) => likesModel
    .create({ likedTuit: tid, likedBy: uid });
/**
 * Deletes likes relationship.
 * @param uid id of user who liked
 * @param tid id of liked tuit
 */
export const userUnlikesTuit = (uid, tid) => likesModel
    .deleteOne({ likedTuit: tid,
    likedBy: uid });
