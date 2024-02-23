import asyncHandler from '../middleware/asyncHandler.js';
import Post from '../models/Post.js';
import ErrorResponse from '../utils/ErrorResponse.js';

// @desc    Create a post
// @route   POST /api/v1/posts/create
// @access  Private
export const createPost = asyncHandler(async (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return next(
      new ErrorResponse('Please provide some content for the post', 400),
    );
  }

  const post = await Post.create({
    content,
    author: req.user.id,
  });

  res.status(201).json({ success: true, data: post });
});

/// @desc   Get all posts
// @route   GET /api/v1/posts
// @access  Private
export const getPosts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
