// import validateAddRowForm from '../../../src/client/redux/selectors/validateAddRowForm'


// describe('validateAddRowForm tests', () => {
//   it('Returns false if event ID is empty', () => {
//     const mockState = {
//       app: {
//         allData: [
//           {
//             event_id: '1234',
//             agency_code: '5678',
//           },
//         ],
//       },
//       addRow: {
//         eventId: '',
//         agency: 'National Corn Agency',
//         statusChangeDate: '2017-10-11',
//       },
//     }
//     const actual = validateAddRowForm(mockState)

//     expect(actual).toEqual(false)
//   })

//   it('Returns false if agency is empty', () => {
//     const mockState = {
//       app: {
//         allData: [
//           {
//             event_id: '1234',
//             agency_code: '5678',
//           },
//         ],
//       },
//       addRow: {
//         eventId: 'the main event',
//         agency: '',
//         statusChangeDate: '2017-10-11',
//       },
//     }
//     const actual = validateAddRowForm(mockState)

//     expect(actual).toEqual(false)
//   })

//   it('Returns false if event ID and agency combo is taken', () => {
//     const mockState = {
//       app: {
//         allData: [
//           {
//             event_id: '1234',
//             agency_code: '5678',
//           },
//           {
//             event_id: 'the main event',
//             agency_code: 'National Corn Agency',
//           },
//         ],
//       },
//       addRow: {
//         eventId: 'the main event',
//         agency: 'National Corn Agency',
//         statusChangeDate: '2017-10-11',
//       },
//     }
//     const actual = validateAddRowForm(mockState)

//     expect(actual).toEqual(false)
//   })

//   it('Returns true if event ID and agency is valid', () => {
//     const mockState = {
//       app: {
//         allData: [
//           {
//             event_id: 'the main event',
//             agency_code: '5678',
//           },
//         ],
//       },
//       addRow: {
//         eventId: 'the main event',
//         agency: 'National Corn Agency',
//         statusChangeDate: '2017-10-11',
//       },
//     }
//     const actual = validateAddRowForm(mockState)

//     expect(actual).toEqual(true)
//   })
// })
