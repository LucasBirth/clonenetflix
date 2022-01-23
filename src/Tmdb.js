const API_KEY = '60b0732f0e66e0d769ace3f8be90eeb9';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais netflix
- recomendados trending
- em alta top rated
- acao
- comedia
- terror
- romance
- documentarios
*/

const basicFatch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFatch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Voce',
                items: await basicFatch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFatch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Acao',
                items: await basicFatch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'comedia',
                items: await basicFatch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFatch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFatch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFatch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },            
        ];
    },
    getMovieInfo: async (movieid, type) => {
        let info = {};

        if(movieid) {
            switch(type) {
                case 'movie':
                    info = await basicFatch(`/movie/${movieid}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFatch(`/tv/${movieid}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
            }
        }

        return info;
    }
}