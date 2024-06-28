
        document.addEventListener('DOMContentLoaded', function() {
            const audio = document.getElementById('audio');
            const playBtn = document.getElementById('playBtn');
            const quiz = document.getElementById('quiz');
            const guessInput = document.getElementById('guess');
            const submitBtn = document.getElementById('submitBtn');
            const result = document.getElementById('result');
            const infoBtn = document.getElementById('infoBtn');
            const startBtn = document.getElementById('startBtn');
            

            const songs = [
                { title: "Thunderstruck",
                artist: "acdc", src: "music/Thunderstruck_15Sec.mp3",
                    description: 
                    "AC/DC ist eine australische Hard-Rock-Band, die 1973 von den in Schottland geborenen Brüdern Angus und Malcolm Young gegründet wurde. Sie zählen zu den Pionieren des Hard Rock, die Band selbst bezeichnet ihre Musik jedoch stets als Rock 'n' Roll."},
                { title: "Paradise City", src: "music/Paradise_City_15sek.mp3",
                    artist: "Guns n Roases",
                    description: "Guns N' Roses ist eine US-amerikanische Hard-Rock-Band, die 1985 in Los Angeles gegründet wurde. Sie hat weltweit etwa 100 Millionen Alben verkauft, davon über 44,5 Millionen in den USA. Im April 2012 wurde die Band mit der Aufnahme in die Rock and Roll Hall of Fame geehrt."
                },
                { title: "Stairway to Heaven", 
                  artist: "Led Zeppelin",
                  src: "music/Stairway_To_Heaven_15sek.mp4", 
                  description: "Das Stück ist eine Rock-Ballade mit einer Länge von acht Minuten. Nach Angaben von Jimmy Page wurde sie im Headly Grange Studio in Hampshire komponiert. Sie wurde im Dezember 1970 aufgenommen und im März 1971 uraufgeführt. ---Wikipedia" 
                },
                { title: "House Of The Rising Sun", 
                    artist: "The Animals",
                    src: "music/house_of_the_rising_sun_15sek.mp4", 
                    description: "The House of the Rising Sun (bzw. House of the Rising Sun) ist ein amerikanischer Folk-Song, der 1964 in der Fassung der britischen Band The Animals zum Hit wurde. 1970 brachte die Hard-Rock-Band Frijid Pink eine weitere Version heraus und machte das Stück damit zu einem der wenigen Songs, die in zwei verschiedenen Fassungen zum Millionenseller wurden. ---Wikipedia" 
                  },
                  { title: "Purple Rain", 
                    artist: "Prince",
                    src: "music/Prince-Purple_Rain_15sek.mp4", 
                    description: "Der Rocksong wurde vom amerikanischen Musiker Prince geschrieben, arrangiert, produziert und gesungen. Der Song wurde im Juni 1984 veröffentlicht. Der Liedtext handelt von Erleuchtung und nimmt Bezug auf die Handlung des gleichnamigen Films, in dem der Song ebenfalls zu hören ist." 
                  },
                  { title: "Enter Sandman", 
                    artist: "Metallica",
                    src: "music/Enter_Sandman_15sek.mp4", 
                    description: "Enter Sandman ist ein Lied der US-amerikanischen Metal-Band Metallica, das auf dem Album Metallica aus dem Jahre 1991 erschienen ist. Das Lied ist eine ihrer bekanntesten Aufnahmen, mit einem signifikanten Riff, der sich durch das gesamte Lied hindurchzieht, und der düsteren Geschichte eines Kindes, das sich vor dem Einschlafen und den hierbei auftretenden schrecklichen Albträumen fürchtet. Der zu besiegende Sandmann, der der Legende nach den Kindern Sand in die Augen streut, damit sie einschlafen, steht symbolisch dafür. Das Lied gehört zum Standardrepertoire bei Auftritten von Metallica und wurde zusammen mit dem San Francisco Symphony Orchestra für das S&M-Album als erste Zugabe aufgenommen. " 
                  },
                  { title: "Feel Good Inc", 
                    artist: "Gorillaz",
                    src: "music/Gorillaz-Feel_Good Inc_15sek.mp4", 
                    description: "Das Lied entstand in Zusammenarbeit der britischen Comicband Gorillaz mit dem US-amerikanischen Hip-Hop-Trio De La Soul im Jahr 2005. Der Text handelt von der Stadt und dem Gefühl der Isolation. Es geht um das Streben nach Glück und das Weitermachen trotz Schwierigkeiten." 
                  },
                  { title: "Welcome to the Jungle", 
                    artist: "Guns'n Roses",
                    src: "music/Guns'n_Roses-Welcome_to_the_Jungle_15sek.mp4", 
                    description: "Der Rocksong wurde von der amerikanischen Hard-Rock-Band Guns N’Roses im Jahr 1987 veröffentlicht. Das Lied reflektiert kritisch das alltägliche Leben in Los Angeles." 
                  },
                  { title: "Hotel California", 
                    artist: "Eagles",
                    src: "music/hotel_california_15sek.mp4", 
                    description: "Das Lied der amerikanischen Coutry-Rockband Eagles wurde im Dezember 1976 veröffentlicht. Der Song deutet auf den Materialismus und die Oberflächlichkeit hin, die oft mit dem Ruhm einhergehen." 
                  },
                  { title: "Seven Nation Army", 
                    artist: "The White Stripes",
                    src: "music/seven_nation_15sek.mp4", 
                    description: "Das Lied der amerikanischen Band The White Stripes wurde im Mai 2003 veröffentlicht. Es ist ein Lied über Widerstand, Unabhängigkeit und den Kampf gegen Widrigkeiten. " 
                  },
                  { title: "All Star", 
                    artist: "Smash Mouth",
                    src: "music/Smash_Mouth-All_Star_15sek.mp4", 
                    description: "Das Lied der amerikanischen Rockband Smash Mouth wurde im Mai 1999 veröffentlicht. Der Liedtext ermutigt den Hörer, sein eigenes Potential zu erkennen und es zu nutzen." 
                  },




infoBtn

            ];

            let currentSong = null;

            playBtn.addEventListener('click', function() {
                startGame();
            });

            submitBtn.addEventListener('click', function() {
                checkGuess();
            });
            infoBtn.addEventListener('click', function() {
                result.textContent = currentSong.title + ' ' + currentSong.description;
                result.style.color = "black";
            });
            function startGame() {
                playBtn.style.display = 'none';
                quiz.style.display = 'block';
                currentSong = songs[Math.floor(Math.random() * songs.length)];
                audio.src = currentSong.src;
                audio.play();
            }

            function checkGuess() {
                const guess = guessInput.value.trim().toLowerCase();
                if (guess === currentSong.title.toLowerCase()) {
                    result.textContent = 'Richtig! ';
                    result.style.color = 'green';
                    
                    
                } else {
                    result.textContent = 'Falsch. Der richtige Titel war: ' + currentSong.title; 
                    result.style.color = 'red';
                    
                    
                }


                startBtn.addEventListener('click', function() {
                    result.textContent = '';
                    guessInput.value = '';
                    startGame();
                });


                
            }
        });
