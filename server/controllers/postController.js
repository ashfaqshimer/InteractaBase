// @desc    Create a post
// @route   POST /api/v1/post
// @access  Private
export const createPost = asyncHandler(async (req, res, next) => {
  res.json({ success: true });
});
