import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type Likes = {
  __typename?: 'Likes';
  created_at: Scalars['Int'];
  id: Scalars['ID'];
  receive_user_id: Scalars['Int'];
  send_user_id: Scalars['Int'];
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
  createAccountAndUser: Users;
  createBlock: Blocks;
  createLike: Likes;
  createReport: Reports;
  createUser: Users;
  createUserSearchFilters: UserSearchFilters;
  createVerifyEmail: VerifyEmails;
  login: Users;
  updateAccount: Accounts;
  updateUser: Users;
  updateUserProfile: UserProfiles;
  updateUserSearchFilters: UserSearchFilters;
};


export type MutationCreateAccountArgs = {
  input?: InputMaybe<NewAccounts>;
};


export type MutationCreateAccountAndUserArgs = {
  account: NewAccounts;
  user: NewUsers;
};


export type MutationCreateBlockArgs = {
  input?: InputMaybe<NewBlocks>;
};


export type MutationCreateLikeArgs = {
  input?: InputMaybe<NewLikes>;
};


export type MutationCreateReportArgs = {
  input?: InputMaybe<NewReports>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<NewUsers>;
};


export type MutationCreateUserSearchFiltersArgs = {
  input?: InputMaybe<NewUserSearchFilters>;
};


export type MutationCreateVerifyEmailArgs = {
  input?: InputMaybe<NewVerifyEmails>;
};


export type MutationLoginArgs = {
  input?: InputMaybe<NewLogin>;
};


export type MutationUpdateAccountArgs = {
  input?: InputMaybe<UpdateAccounts>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUsers>;
};


export type MutationUpdateUserProfileArgs = {
  input?: InputMaybe<UpdateUserProfiles>;
};


export type MutationUpdateUserSearchFiltersArgs = {
  input?: InputMaybe<UpdateUserSearchFilters>;
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

export type NewLikes = {
  receive_user_id: Scalars['Int'];
};

export type NewLogin = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type NewReports = {
  reason: Scalars['String'];
  reported_id: Scalars['Int'];
  reporter_id: Scalars['Int'];
};

export type NewUserSearchFilters = {
  gender?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
};

export type NewUsers = {
  display_name: Scalars['String'];
  gender: Scalars['String'];
  screen_name: Scalars['String'];
};

export type NewVerifyEmails = {
  email: Scalars['String'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  end_cursor?: Maybe<Scalars['String']>;
  has_next_page: Scalars['Boolean'];
  has_previous_page: Scalars['Boolean'];
  start_cursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account: Accounts;
  block: Blocks;
  blocks: Array<Blocks>;
  me: ResponseUsers;
  report: Reports;
  reports: Array<Reports>;
  user: ResponseUsers;
  user_search_filters: UserSearchFilters;
  users: UserConnection;
  verify_email: VerifyEmails;
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


export type QueryUsersArgs = {
  after: Scalars['String'];
  first: Scalars['Int'];
};


export type QueryVerify_EmailArgs = {
  code: Scalars['String'];
};

export type Reports = {
  __typename?: 'Reports';
  id: Scalars['ID'];
  reason: Scalars['String'];
  reported_id: Scalars['Int'];
  reporter_id: Scalars['Int'];
};

export type ResponseUserProfiles = {
  __typename?: 'ResponseUserProfiles';
  annual_income: Scalars['String'];
  annual_income_id: Scalars['Int'];
  blood_type: Scalars['String'];
  blood_type_id: Scalars['Int'];
  body_type: Scalars['String'];
  body_type_id: Scalars['Int'];
  dating_expenses: Scalars['String'];
  dating_expenses_id: Scalars['Int'];
  days_off: Scalars['String'];
  days_off_id: Scalars['Int'];
  desire_for_children: Scalars['String'];
  desire_for_children_id: Scalars['Int'];
  drinking: Scalars['String'];
  drinking_id: Scalars['Int'];
  education: Scalars['String'];
  education_id: Scalars['Int'];
  height: Scalars['String'];
  height_id: Scalars['Int'];
  hobbies: Scalars['String'];
  hobbies_id: Scalars['Int'];
  hometown_country: Scalars['String'];
  hometown_country_id: Scalars['Int'];
  hometown_state: Scalars['String'];
  hometown_state_id: Scalars['Int'];
  household_chores_and_child_rearing: Scalars['String'];
  household_chores_and_child_rearing_id: Scalars['Int'];
  indeal_first_encointer: Scalars['String'];
  indeal_first_encointer_id: Scalars['Int'];
  intentions_towards_marriage: Scalars['String'];
  intentions_towards_marriage_id: Scalars['Int'];
  interests: Scalars['String'];
  interests_id: Scalars['Int'];
  introduction?: Maybe<Scalars['String']>;
  job_title: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  language_id: Scalars['Int'];
  looking_for: Scalars['String'];
  looking_for_id: Scalars['Int'];
  marital_history: Scalars['String'];
  marital_history_id: Scalars['Int'];
  occupation: Scalars['String'];
  occupation_id: Scalars['Int'];
  presence_of_children: Scalars['String'];
  presence_of_children_id: Scalars['Int'];
  presonality_type: Scalars['String'];
  presonality_type_id: Scalars['Int'];
  residence_country: Scalars['String'];
  residence_country_id: Scalars['Int'];
  residence_state: Scalars['String'];
  residence_state_id: Scalars['Int'];
  roommates: Scalars['String'];
  roommates_id: Scalars['Int'];
  school_name: Scalars['String'];
  siblings: Scalars['String'];
  siblings_id: Scalars['Int'];
  smoking: Scalars['String'];
  smoking_id: Scalars['Int'];
  sociability: Scalars['String'];
  sociability_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type ResponseUsers = {
  __typename?: 'ResponseUsers';
  age: Scalars['Int'];
  display_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  is_liked?: Maybe<Scalars['Boolean']>;
  location: Scalars['String'];
  screen_name: Scalars['String'];
  user_profile: ResponseUserProfiles;
  uuid: Scalars['String'];
};

export type UpdateAccounts = {
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
};

export type UpdateUserProfiles = {
  body_type_id: Scalars['Int'];
  id: Scalars['ID'];
};

export type UpdateUserSearchFilters = {
  annual_income_id: Scalars['Int'];
  blood_type_id: Scalars['Int'];
  body_type_id: Scalars['Int'];
  drinking_id: Scalars['Int'];
  education_id: Scalars['Int'];
  gender?: InputMaybe<Scalars['String']>;
  has_introduction: Scalars['Boolean'];
  height_id: Scalars['Int'];
  id: Scalars['ID'];
  location?: InputMaybe<Scalars['String']>;
  occupation_id: Scalars['Int'];
  purpose: Scalars['Int'];
  smoking_id: Scalars['Int'];
};

export type UpdateUsers = {
  age: Scalars['Int'];
  display_name: Scalars['String'];
  gender: Scalars['String'];
  location: Scalars['String'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  page_info: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: ResponseUsers;
};

export type UserProfiles = {
  __typename?: 'UserProfiles';
  annual_income_id: Scalars['Int'];
  blood_type_id: Scalars['Int'];
  body_type_id: Scalars['Int'];
  dating_expenses_id: Scalars['Int'];
  days_off_id: Scalars['Int'];
  desire_for_children_id: Scalars['Int'];
  drinking_id: Scalars['Int'];
  education_id: Scalars['Int'];
  height_id: Scalars['Int'];
  hobbies_id: Scalars['Int'];
  hometown_id: Scalars['Int'];
  household_chores_and_child_rearing_id: Scalars['Int'];
  id: Scalars['ID'];
  indeal_first_encointer_id: Scalars['Int'];
  intentions_towards_marriage_id: Scalars['Int'];
  interests_id: Scalars['Int'];
  introduction: Scalars['String'];
  job_title: Scalars['String'];
  language_id: Scalars['Int'];
  looking_for_id: Scalars['Int'];
  marital_history_id: Scalars['Int'];
  occupation_id: Scalars['Int'];
  presence_of_children_id: Scalars['Int'];
  presonality_type_id: Scalars['Int'];
  residence_id: Scalars['Int'];
  roommates_id: Scalars['Int'];
  school_name: Scalars['String'];
  siblings_id: Scalars['Int'];
  smoking_id: Scalars['Int'];
  sociability_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type UserSearchFilters = {
  __typename?: 'UserSearchFilters';
  annual_income_id: Scalars['Int'];
  blood_type_id: Scalars['Int'];
  body_type_id: Scalars['Int'];
  drinking_id: Scalars['Int'];
  education_id: Scalars['Int'];
  gender: Scalars['String'];
  has_introduction: Scalars['Boolean'];
  height_id: Scalars['Int'];
  id: Scalars['ID'];
  location?: Maybe<Scalars['String']>;
  occupation_id: Scalars['Int'];
  purpose: Scalars['Int'];
  smoking_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type Users = {
  __typename?: 'Users';
  account_id: Scalars['Int'];
  age: Scalars['Int'];
  display_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  is_authorize_email: Scalars['Boolean'];
  is_verified_age: Scalars['Boolean'];
  is_verified_email: Scalars['Boolean'];
  location: Scalars['String'];
  screen_name: Scalars['String'];
  uuid: Scalars['String'];
};

export type VerifyEmails = {
  __typename?: 'VerifyEmails';
  email: Scalars['String'];
  id: Scalars['ID'];
  pin_code: Scalars['String'];
  token: Scalars['String'];
};

export type CreateAccountMutationVariables = Exact<{
  account?: InputMaybe<NewAccounts>;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'Accounts', phone_number: string, email: string, password: string } };

export type CreateUserMutationVariables = Exact<{
  user?: InputMaybe<NewUsers>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'Users', display_name: string, screen_name: string, gender: string, location: string } };

export type CreateVerifyEmailMutationVariables = Exact<{
  verify_email?: InputMaybe<NewVerifyEmails>;
}>;


export type CreateVerifyEmailMutation = { __typename?: 'Mutation', createVerifyEmail: { __typename?: 'VerifyEmails', token: string, email: string, pin_code: string } };

export type CreateAccountAndUserMutationVariables = Exact<{
  account: NewAccounts;
  user: NewUsers;
}>;


export type CreateAccountAndUserMutation = { __typename?: 'Mutation', createAccountAndUser: { __typename?: 'Users', account_id: number, display_name: string, screen_name: string, gender: string, location: string } };

export type CreateUserSearchFiltersMutationVariables = Exact<{
  filter?: InputMaybe<NewUserSearchFilters>;
}>;


export type CreateUserSearchFiltersMutation = { __typename?: 'Mutation', createUserSearchFilters: { __typename?: 'UserSearchFilters', gender: string, location?: string | null } };

export type LoginMutationVariables = Exact<{
  login: NewLogin;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Users', id: string } };

export type UpdateAccountMutationVariables = Exact<{
  account: UpdateAccounts;
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount: { __typename?: 'Accounts', phone_number: string, email: string, password: string } };

export type UpdateUserMutationVariables = Exact<{
  user: UpdateUsers;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'Users', display_name: string, gender: string, age: number, location: string } };

export type UpdateUserSearchFiltersMutationVariables = Exact<{
  filter?: InputMaybe<UpdateUserSearchFilters>;
}>;


export type UpdateUserSearchFiltersMutation = { __typename?: 'Mutation', updateUserSearchFilters: { __typename?: 'UserSearchFilters', gender: string, location?: string | null } };

export type CreateLikeMutationVariables = Exact<{
  like?: InputMaybe<NewLikes>;
}>;


export type CreateLikeMutation = { __typename?: 'Mutation', createLike: { __typename?: 'Likes', send_user_id: number, receive_user_id: number } };

export type UpdateUserProfileMutationVariables = Exact<{
  profile?: InputMaybe<UpdateUserProfiles>;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserProfiles', body_type_id: number } };

export type AccountsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AccountsQuery = { __typename?: 'Query', account: { __typename?: 'Accounts', phone_number: string, email: string, password: string } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'ResponseUsers', id: string, display_name: string, gender: string, age: number, location: string, user_profile: { __typename?: 'ResponseUserProfiles', height_id: number, body_type_id: number, blood_type_id: number, residence_state_id: number, hometown_state: string, occupation_id: number, education_id: number, annual_income_id: number, smoking_id: number, drinking_id: number } } };

export type UsersQueryVariables = Exact<{
  first: Scalars['Int'];
  after: Scalars['String'];
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', edges: Array<{ __typename?: 'UserEdge', cursor: string, node: { __typename?: 'ResponseUsers', id: string, display_name: string, screen_name: string, age: number, gender: string, user_profile: { __typename?: 'ResponseUserProfiles', introduction?: string | null, residence_country: string, residence_state: string } } }>, page_info: { __typename?: 'PageInfo', has_next_page: boolean, has_previous_page: boolean, start_cursor?: string | null, end_cursor?: string | null } } };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'ResponseUsers', id: string, uuid: string, display_name: string, age: number, is_liked?: boolean | null, user_profile: { __typename?: 'ResponseUserProfiles', user_id: number, height_id: number, height: string, body_type: string, blood_type: string, residence_country: string, residence_state: string, hometown_country: string, hometown_state: string, occupation: string, education: string, annual_income: string, smoking: string, drinking: string } } };

export type UserSearchFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSearchFiltersQuery = { __typename?: 'Query', user_search_filters: { __typename?: 'UserSearchFilters', id: string, gender: string, location?: string | null, purpose: number, has_introduction: boolean, height_id: number, body_type_id: number, blood_type_id: number, occupation_id: number, education_id: number, annual_income_id: number, smoking_id: number, drinking_id: number } };

export type GetVerifyEmailByPinCodeQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type GetVerifyEmailByPinCodeQuery = { __typename?: 'Query', verify_email: { __typename?: 'VerifyEmails', email: string } };


export const CreateAccountDocument = gql`
    mutation CreateAccount($account: NewAccounts) {
  createAccount(input: $account) {
    phone_number
    email
    password
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($user: NewUsers) {
  createUser(input: $user) {
    display_name
    screen_name
    gender
    location
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateVerifyEmailDocument = gql`
    mutation CreateVerifyEmail($verify_email: NewVerifyEmails) {
  createVerifyEmail(input: $verify_email) {
    token
    email
    pin_code
  }
}
    `;
export type CreateVerifyEmailMutationFn = Apollo.MutationFunction<CreateVerifyEmailMutation, CreateVerifyEmailMutationVariables>;

/**
 * __useCreateVerifyEmailMutation__
 *
 * To run a mutation, you first call `useCreateVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVerifyEmailMutation, { data, loading, error }] = useCreateVerifyEmailMutation({
 *   variables: {
 *      verify_email: // value for 'verify_email'
 *   },
 * });
 */
export function useCreateVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<CreateVerifyEmailMutation, CreateVerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVerifyEmailMutation, CreateVerifyEmailMutationVariables>(CreateVerifyEmailDocument, options);
      }
export type CreateVerifyEmailMutationHookResult = ReturnType<typeof useCreateVerifyEmailMutation>;
export type CreateVerifyEmailMutationResult = Apollo.MutationResult<CreateVerifyEmailMutation>;
export type CreateVerifyEmailMutationOptions = Apollo.BaseMutationOptions<CreateVerifyEmailMutation, CreateVerifyEmailMutationVariables>;
export const CreateAccountAndUserDocument = gql`
    mutation CreateAccountAndUser($account: NewAccounts!, $user: NewUsers!) {
  createAccountAndUser(account: $account, user: $user) {
    account_id
    display_name
    screen_name
    gender
    location
  }
}
    `;
export type CreateAccountAndUserMutationFn = Apollo.MutationFunction<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>;

/**
 * __useCreateAccountAndUserMutation__
 *
 * To run a mutation, you first call `useCreateAccountAndUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountAndUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountAndUserMutation, { data, loading, error }] = useCreateAccountAndUserMutation({
 *   variables: {
 *      account: // value for 'account'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateAccountAndUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>(CreateAccountAndUserDocument, options);
      }
export type CreateAccountAndUserMutationHookResult = ReturnType<typeof useCreateAccountAndUserMutation>;
export type CreateAccountAndUserMutationResult = Apollo.MutationResult<CreateAccountAndUserMutation>;
export type CreateAccountAndUserMutationOptions = Apollo.BaseMutationOptions<CreateAccountAndUserMutation, CreateAccountAndUserMutationVariables>;
export const CreateUserSearchFiltersDocument = gql`
    mutation CreateUserSearchFilters($filter: NewUserSearchFilters) {
  createUserSearchFilters(input: $filter) {
    gender
    location
  }
}
    `;
export type CreateUserSearchFiltersMutationFn = Apollo.MutationFunction<CreateUserSearchFiltersMutation, CreateUserSearchFiltersMutationVariables>;

/**
 * __useCreateUserSearchFiltersMutation__
 *
 * To run a mutation, you first call `useCreateUserSearchFiltersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserSearchFiltersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserSearchFiltersMutation, { data, loading, error }] = useCreateUserSearchFiltersMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useCreateUserSearchFiltersMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserSearchFiltersMutation, CreateUserSearchFiltersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserSearchFiltersMutation, CreateUserSearchFiltersMutationVariables>(CreateUserSearchFiltersDocument, options);
      }
export type CreateUserSearchFiltersMutationHookResult = ReturnType<typeof useCreateUserSearchFiltersMutation>;
export type CreateUserSearchFiltersMutationResult = Apollo.MutationResult<CreateUserSearchFiltersMutation>;
export type CreateUserSearchFiltersMutationOptions = Apollo.BaseMutationOptions<CreateUserSearchFiltersMutation, CreateUserSearchFiltersMutationVariables>;
export const LoginDocument = gql`
    mutation Login($login: NewLogin!) {
  login(input: $login) {
    id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      login: // value for 'login'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($account: UpdateAccounts!) {
  updateAccount(input: $account) {
    phone_number
    email
    password
  }
}
    `;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, options);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($user: UpdateUsers!) {
  updateUser(input: $user) {
    display_name
    gender
    age
    location
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateUserSearchFiltersDocument = gql`
    mutation UpdateUserSearchFilters($filter: UpdateUserSearchFilters) {
  updateUserSearchFilters(input: $filter) {
    gender
    location
  }
}
    `;
export type UpdateUserSearchFiltersMutationFn = Apollo.MutationFunction<UpdateUserSearchFiltersMutation, UpdateUserSearchFiltersMutationVariables>;

/**
 * __useUpdateUserSearchFiltersMutation__
 *
 * To run a mutation, you first call `useUpdateUserSearchFiltersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSearchFiltersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserSearchFiltersMutation, { data, loading, error }] = useUpdateUserSearchFiltersMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdateUserSearchFiltersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserSearchFiltersMutation, UpdateUserSearchFiltersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserSearchFiltersMutation, UpdateUserSearchFiltersMutationVariables>(UpdateUserSearchFiltersDocument, options);
      }
export type UpdateUserSearchFiltersMutationHookResult = ReturnType<typeof useUpdateUserSearchFiltersMutation>;
export type UpdateUserSearchFiltersMutationResult = Apollo.MutationResult<UpdateUserSearchFiltersMutation>;
export type UpdateUserSearchFiltersMutationOptions = Apollo.BaseMutationOptions<UpdateUserSearchFiltersMutation, UpdateUserSearchFiltersMutationVariables>;
export const CreateLikeDocument = gql`
    mutation CreateLike($like: NewLikes) {
  createLike(input: $like) {
    send_user_id
    receive_user_id
  }
}
    `;
export type CreateLikeMutationFn = Apollo.MutationFunction<CreateLikeMutation, CreateLikeMutationVariables>;

/**
 * __useCreateLikeMutation__
 *
 * To run a mutation, you first call `useCreateLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLikeMutation, { data, loading, error }] = useCreateLikeMutation({
 *   variables: {
 *      like: // value for 'like'
 *   },
 * });
 */
export function useCreateLikeMutation(baseOptions?: Apollo.MutationHookOptions<CreateLikeMutation, CreateLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLikeMutation, CreateLikeMutationVariables>(CreateLikeDocument, options);
      }
export type CreateLikeMutationHookResult = ReturnType<typeof useCreateLikeMutation>;
export type CreateLikeMutationResult = Apollo.MutationResult<CreateLikeMutation>;
export type CreateLikeMutationOptions = Apollo.BaseMutationOptions<CreateLikeMutation, CreateLikeMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($profile: UpdateUserProfiles) {
  updateUserProfile(input: $profile) {
    body_type_id
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      profile: // value for 'profile'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const AccountsDocument = gql`
    query accounts($id: ID!) {
  account(id: $id) {
    phone_number
    email
    password
  }
}
    `;

/**
 * __useAccountsQuery__
 *
 * To run a query within a React component, call `useAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAccountsQuery(baseOptions: Apollo.QueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
      }
export function useAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
        }
export type AccountsQueryHookResult = ReturnType<typeof useAccountsQuery>;
export type AccountsLazyQueryHookResult = ReturnType<typeof useAccountsLazyQuery>;
export type AccountsQueryResult = Apollo.QueryResult<AccountsQuery, AccountsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    display_name
    gender
    age
    location
    user_profile {
      height_id
      body_type_id
      blood_type_id
      residence_state_id
      hometown_state
      occupation_id
      education_id
      annual_income_id
      smoking_id
      drinking_id
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UsersDocument = gql`
    query users($first: Int!, $after: String!) {
  users(first: $first, after: $after) {
    edges {
      cursor
      node {
        id
        display_name
        screen_name
        age
        gender
        user_profile {
          introduction
          residence_country
          residence_state
        }
      }
    }
    page_info {
      has_next_page
      has_previous_page
      start_cursor
      end_cursor
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUsersQuery(baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    id
    uuid
    display_name
    age
    is_liked
    user_profile {
      user_id
      height_id
      height
      body_type
      blood_type
      residence_country
      residence_state
      hometown_country
      hometown_state
      occupation
      education
      annual_income
      smoking
      drinking
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UserSearchFiltersDocument = gql`
    query UserSearchFilters {
  user_search_filters {
    id
    gender
    location
    purpose
    has_introduction
    height_id
    body_type_id
    blood_type_id
    occupation_id
    education_id
    annual_income_id
    smoking_id
    drinking_id
  }
}
    `;

/**
 * __useUserSearchFiltersQuery__
 *
 * To run a query within a React component, call `useUserSearchFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSearchFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSearchFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserSearchFiltersQuery(baseOptions?: Apollo.QueryHookOptions<UserSearchFiltersQuery, UserSearchFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserSearchFiltersQuery, UserSearchFiltersQueryVariables>(UserSearchFiltersDocument, options);
      }
export function useUserSearchFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSearchFiltersQuery, UserSearchFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserSearchFiltersQuery, UserSearchFiltersQueryVariables>(UserSearchFiltersDocument, options);
        }
export type UserSearchFiltersQueryHookResult = ReturnType<typeof useUserSearchFiltersQuery>;
export type UserSearchFiltersLazyQueryHookResult = ReturnType<typeof useUserSearchFiltersLazyQuery>;
export type UserSearchFiltersQueryResult = Apollo.QueryResult<UserSearchFiltersQuery, UserSearchFiltersQueryVariables>;
export const GetVerifyEmailByPinCodeDocument = gql`
    query GetVerifyEmailByPinCode($code: String!) {
  verify_email(code: $code) {
    email
  }
}
    `;

/**
 * __useGetVerifyEmailByPinCodeQuery__
 *
 * To run a query within a React component, call `useGetVerifyEmailByPinCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVerifyEmailByPinCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVerifyEmailByPinCodeQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetVerifyEmailByPinCodeQuery(baseOptions: Apollo.QueryHookOptions<GetVerifyEmailByPinCodeQuery, GetVerifyEmailByPinCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVerifyEmailByPinCodeQuery, GetVerifyEmailByPinCodeQueryVariables>(GetVerifyEmailByPinCodeDocument, options);
      }
export function useGetVerifyEmailByPinCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVerifyEmailByPinCodeQuery, GetVerifyEmailByPinCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVerifyEmailByPinCodeQuery, GetVerifyEmailByPinCodeQueryVariables>(GetVerifyEmailByPinCodeDocument, options);
        }
export type GetVerifyEmailByPinCodeQueryHookResult = ReturnType<typeof useGetVerifyEmailByPinCodeQuery>;
export type GetVerifyEmailByPinCodeLazyQueryHookResult = ReturnType<typeof useGetVerifyEmailByPinCodeLazyQuery>;
export type GetVerifyEmailByPinCodeQueryResult = Apollo.QueryResult<GetVerifyEmailByPinCodeQuery, GetVerifyEmailByPinCodeQueryVariables>;