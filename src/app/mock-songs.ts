import { Song } from '../app/song';

export const SONGS: Song [] = [
    { 
        id: 1,
        title: 'I Want to Break Free',
        album: 'The Works',
        author: 'Queen',
        style: 'Rock',
        year: '1984',
        duration: '05:00',
        description: 'Cuando I Want To Break Free fue lanzado como single en 1984, fue otro éxito para Queen, número 3 en las listas británicas. La canción llegó al Top 10 en la mayoría de las listas de éxitos del mundo, incluso llegó al primer lugar en países como Austria, Bélgica y Holanda',
        picture: '../../assets/img/queen.jpg',
    },
    
    {
        id: 2,
        title: 'Every Breath You Take',
        album: 'Synchronicity',
        author: 'The Police',
        style: 'Rock',
        year: '1983',
        duration: '03:44',
        description: 'Every Breath You Take es una power ballad grabada e interpretada de la banda británica de rock The Police, perteneciente al álbum Synchronicity (1983). Escrita por Sting, se convirtió en el mayor éxito de 1983, encabezando la lista Billboard de los 100 sencillos más vendidos durante ocho semanas, siendo el único sencillo de la banda en esta tabla; perdurando así hasta hoy como insignia tanto de Sting, como de la banda.',
        picture: '../../assets/img/queen.jpg',
    }
]