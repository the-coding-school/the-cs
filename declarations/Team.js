// @flow
/* eslint-disable */

type MemberDataNameType = {
  first: string,
  last: string
};

type MemberDataImagesType = {
  regular: string,
  fun?: string
};

type MemberDataType = {
  name: MemberDataNameType,
  position?: string,
  organization: string,
  description?: string,
  blurb?: string,
  links?: { [string]: string},
  images?: MemberDataImagesType,
  order?: number
}
