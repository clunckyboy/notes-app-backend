import ClientError from '../../../exceptions/client-error.js';
import response from '../../../utils/response.js';
import StorageService from '../storage/storage-service.js';

export const uploadImage = async (req, res, next) => {
  if (!req.file) {
    return next(new ClientError('No file uploaded'));
  }

  const storageService = new StorageService();
  const filename = `${Date.now()}-${req.file.originalname}`;
  const fileLocation = await storageService.writeFile(req.file, {
    filename,
    contentType: req.file.mimetype,
  });

  // Local storage
  // const host = process.env.HOST || 'localhost';
  // const port = process.env.PORT || 3000;
  // const encodedFilename = encodeURIComponent(req.file.filename);
  // const fileLocation = `http://${host}:${port}/uploads/${encodedFilename}`;

  return response(res, 201, 'success', { fileLocation });
};