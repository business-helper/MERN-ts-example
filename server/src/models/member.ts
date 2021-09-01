import mongoose from 'mongoose';

interface IMember {
  name: string;
  country: string;
}

interface MemberDoc extends mongoose.Document {
  name: string;
  country: string;
}

interface MemberModelInterface extends mongoose.Model<MemberDoc> {
  build(attr: IMember): MemberDoc;
}

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

memberSchema.statics.build = (attr: IMember) => {
  return new Member(attr);
}

const Member = mongoose.model<MemberDoc, MemberModelInterface>('Member', memberSchema);

export default Member;
