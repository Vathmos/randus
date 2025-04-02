export type Group = {
  leader: Member | null;
  members: Member[];
};

export type Gender = "male" | "female" | "";
export type Member = {
  name: string;
  isLeader: boolean;
  gender?: Gender;
};

export type Item = Member & {
  key: string;
};
