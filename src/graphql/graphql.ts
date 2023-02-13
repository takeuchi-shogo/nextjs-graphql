export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Accounts = {
  __typename?: 'Accounts';
  access_level: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  login_status: Scalars['Boolean'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type Blocks = {
  __typename?: 'Blocks';
  blocked: Scalars['Int'];
  blocking: Scalars['Int'];
  id: Scalars['ID'];
};

export type Matches = {
  __typename?: 'Matches';
  female_user_id: Scalars['Int'];
  id: Scalars['ID'];
  male_user_id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Accounts;
  createBlock: Blocks;
  createReport: Reports;
  createUser: Users;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<NewAccounts>;
};


export type MutationCreateBlockArgs = {
  input?: InputMaybe<NewBlocks>;
};


export type MutationCreateReportArgs = {
  input?: InputMaybe<NewReports>;
};


export type MutationCreateUserArgs = {
  input: NewUsers;
};

export type NewAccounts = {
  email: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type NewBlocks = {
  blocked: Scalars['Int'];
  blocking: Scalars['Int'];
};

export type NewReports = {
  reason: Scalars['String'];
  reported_id: Scalars['Int'];
  reporter_id: Scalars['Int'];
};

export type NewUsers = {
  account_id: Scalars['Int'];
  display_name: Scalars['String'];
  gender: Scalars['String'];
  sceen_name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  account: Accounts;
  block: Blocks;
  blocks: Array<Blocks>;
  report: Reports;
  reports: Array<Reports>;
  user: Users;
  users: Array<Users>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryBlockArgs = {
  id: Scalars['ID'];
};


export type QueryReportArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Reports = {
  __typename?: 'Reports';
  id: Scalars['ID'];
  reason: Scalars['String'];
  reported_id: Scalars['Int'];
  reporter_id: Scalars['Int'];
};

export type UserProfiles = {
  __typename?: 'UserProfiles';
  description: Scalars['String'];
  id: Scalars['ID'];
  interests: Scalars['String'];
  looking_for: Scalars['String'];
  user_id: Scalars['Int'];
};

export type Users = {
  __typename?: 'Users';
  account_id: Scalars['Int'];
  display_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  is_authorize_email: Scalars['Boolean'];
  is_verified_age: Scalars['Boolean'];
  is_verified_email: Scalars['Boolean'];
  location: Scalars['String'];
  sceen_name: Scalars['String'];
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'Users', id: string, display_name: string }> };
