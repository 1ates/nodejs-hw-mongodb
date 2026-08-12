import { Schema, model } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      required: true,
      enum: ['work', 'home', 'personal'],
      // default: 'personal',  // hw3 için bu alanın required olması gerekiyor fakat default değer atadığımızda validation hatası vermeden kayıt işlemi başarılı oluyor. Bu yüzden comment out edilmiştir.
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Contact = model('contacts', contactSchema);
