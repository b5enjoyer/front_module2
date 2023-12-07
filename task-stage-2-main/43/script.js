const listUsers = [
    {
        firstName: 'Ivan',
        birthday: '2005-02-15',
        isAdult: false,
    },
    {
        firstName: 'Yana',
        birthday: '1990-04-12',
        isAdult: true,
    },
    {
        firstName: 'John',
        birthday: '1993-07-01',
        isAdult: true,
    },
    {
        firstName: 'Roma',
        birthday: '2018-05-11',
        isAdult: false,
    },
    {
        firstName: 'Alex',
        birthday: '2000-10-15',
        isAdult: true,
    },
];


const filterList = listUsers.filter(user => user.isAdult);

const transformList = filterList.map(user => ({
    ...user,
    birthday: new Date(user.birthday).toLocaleDateString('ru-RU'),
}));

const sortedList = transformList.slice().sort((a, b) => a.firstName.localeCompare(b.firstName));

console.log(filterList);
console.log(transformList);
console.log(sortedList);