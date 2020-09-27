
const graphql = require('graphql');


const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList } = graphql;

const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime', img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg', descr: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
    { id: '2', name: '1984', genre: 'Sci-Fi', img: 'https://lavnik.net/wp-content/uploads/2017/03/o-o-e1489090416858.jpeg', descr: 'In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love.' },
    { id: '3', name: 'V for vendetta', genre: 'Sci-Fi-Triller', img: 'https://icdn.lenta.ru/images/0000/0002/000000020516/pic_1358262335.jpg', descr: 'In a future British tyranny, a shadowy freedom fighter, known only by the alias of "V", plots to overthrow it with the help of a young woman.' },
    { id: '4', name: 'Snatch', genre: 'Crime-Comedy', img: 'https://image.tmdb.org/t/p/w500/56mOJth6DJ6JhgoE2jtpilVqJO.jpg', descr: 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.' },
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        img: { type: GraphQLString },
        descr: { type: GraphQLString }
    }),
});


const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id);
            },
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve() {
                return movies;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});
