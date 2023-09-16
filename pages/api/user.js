import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongo';
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get(async (req, res) => {
  const { phoneNumber } = req.query;
  const client = await clientPromise;
  const db = client.db('test');
  try {
    const user = await db.collection('users').findOne({ phoneNumber });

    if (user) {
      res.status(200).json({
        user,
        message: 'user Found',
      });
    } else {
      res.status(201).json({
        message: 'user not Found',
      });
    }
  } catch (err) {
    res.status(500).json({
      Found: false,
      message: 'user not Found',
    });
  }
});

handler.post(async (req, res) => {
  const { phoneNumber } = req.body;
  const client = await clientPromise;
  const db = client.db('test');

  try {
    const data = await db
      .collection('users')
      .insertOne({ phoneNumber, date: new Date() });

    res.status(200).json({
      insertedId: data.insertedId,
      message: 'user register successfully',
    });
  } catch (err) {
    res.status(500).json({
      Found: false,
      message: 'user not registered',
    });
  }
});
handler.patch(async (req, res) => {
  const { _id, userData } = req.body;
  const client = await clientPromise;
  const db = client.db('test');
  try {
    const updatedData = await db.collection('users').updateOne(
      { phoneNumber: _id },

      {
        $set: { ...userData },
      }
    );
    if (updatedData.matchedCount === 0 && updatedData.upsertedCount === 0) {
      // Handle the case where no document was matched or upserted.
      res.status(404).json({
        message: 'No user found or created',
      });
    } else {
      res.status(200).json({
        updatedData,
        message: 'User updated successfully',
      });
    }
  } catch (err) {
    res.status(500).json({
      err,
      message: 'user not Updated',
    });
  }
});
export default handler;
