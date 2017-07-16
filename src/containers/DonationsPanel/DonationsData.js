import {
  fundChildImage,
  fundClassroomImage,
  fundSchoolImage
} from './images'

export default {
  message: 'Your gift empowers children with the skills and confidence necessary to become future leaders and problem solvers.',
  taxMessage: 'The Coding School is a 501c3 organization. Your gift is tax deductible to the extent allowed by the law. When you make a donation through PayPal, you will automatically receive a receipt that can be used for tax deduction purposes.  Our public charity number is 46-5097610.',
  options: [
    {
      category: "Fund a child",
      image: fundChildImage,
      amount: 100,
      buttonID: "Q6U2GUJ87L59J"
    },
    {
      category: "Fund a classroom",
      image: fundClassroomImage,
      amount: 1500,
      buttonID: "CZQKLGDDQNFUU"
    },
    {
      category: "Fund a school",
      image: fundSchoolImage,
      amount: 5000,
      buttonID: "4E47AZWD8YTBC"
    }
  ]
}
