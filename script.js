most_popular_words_inView = false;
word_count_inView = false;
most_popular_words_melodrama_inView = false;
most_popular_words_pureHeroine_inView = false;
TFIDF_melodrama_inView = false;
TFIDF_pureHeroine_inView = false;
NRC_All_melodrama_inView = false;
NRC_All_pureHeroine_inView = false;
NRC_Pos_melodrama_inView = false;
NRC_Neg_melodrama_inView = false;
NRC_Pos_pureHeroine_inView = false;
NRC_Neg_pureHeroine_inView = false;

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

window.addEventListener("scroll", function(){
    if ($('#chart-word-count').isOnScreen() && word_count_inView == false) {
        word_count_inView = true;
        showWordCount();
    }

    if ($('#chart-most-popular-words').isOnScreen() && most_popular_words_inView == false) {
        most_popular_words_inView = true;
        showMostPopularWords();
    }

    if ($('#chart-most-popular-words-melodrama').isOnScreen() && most_popular_words_melodrama_inView == false) {
        most_popular_words_melodrama_inView = true;
        showMostPopularWords_Melodrama();
    }

    if ($('#chart-most-popular-words-pureHeroine').isOnScreen() && most_popular_words_pureHeroine_inView == false) {
        most_popular_words_pureHeroine_inView = true;
        showMostPopularWords_pureHeroine();
    }

    if ($('#chart-TFIDF-melodrama').isOnScreen() && TFIDF_melodrama_inView == false) {
        TFIDF_melodrama_inView = true;
        showTFIDF_Melodrama();
    }

    if ($('#chart-TFIDF-pureHeroine').isOnScreen() && TFIDF_pureHeroine_inView == false) {
        TFIDF_pureHeroine_inView = true;
        showTFIDF_pureHeroine();
    }

    if ($('#chart-NRC-All-melodrama').isOnScreen() && NRC_All_melodrama_inView == false) {
        NRC_All_melodrama_inView = true;
        showNRC_All_Melodrama();
    }

    if ($('#chart-NRC-All-pureHeroine').isOnScreen() && NRC_All_pureHeroine_inView == false) {
        NRC_All_pureHeroine_inView  = true;
        showNRC_All_pureHeroine();
    }

    if ($('#chart-NRC-Pos-melodrama').isOnScreen() && NRC_Pos_melodrama_inView == false) {
        NRC_Pos_melodrama_inView = true;
        showNRC_Pos_Melodrama();
    }

    if ($('#chart-NRC-Neg-melodrama').isOnScreen() && NRC_Neg_melodrama_inView == false) {
        NRC_Neg_melodrama_inView  = true;
        showNRC_Neg_Melodrama();
    }

    if ($('#chart-NRC-Pos-pureHeroine').isOnScreen() && NRC_Pos_pureHeroine_inView == false) {
        NRC_Pos_pureHeroine_inView = true;
        showNRC_Pos_pureHeroine();
    }

    if ($('#chart-NRC-Neg-pureHeroine').isOnScreen() && NRC_Neg_pureHeroine_inView == false) {
        NRC_Neg_pureHeroine_inView  = true;
        showNRC_Neg_pureHeroine();
    }

})


function showWordCount(){
    var ctx = document.getElementById("chart-word-count").getContext('2d');
    var dataValues = [0, 1, 0, 1, 1, 5, 5, 2, 6, 5, 1];
    var dataLabels = [0, 34,  50, 67, 84, 100, 117, 134, 150, 167, 201];
    var myChart = new Chart(ctx, {
    type: 'bar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels,
        datasets: [{
            label: 'Bins',
            data: dataValues,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Histogram of the word count in each song",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    barPercentage: 1.3,
                    ticks: {
                        max: 3,
                    }
                },
                {
                    display: true,
                    ticks: {
                        autoSkip: false,
                        max: 4,
                        fontColor: 'white'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Word count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Song Count',
                        fontColor: 'white'
                    },
                    ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//---------------------

function showMostPopularWords(){
    var ctx_most_popular_words = document.getElementById("chart-most-popular-words").getContext('2d');
    var dataValues_most_popular_words = [68, 56, 40, 40, 39, 36, 34, 33, 31, 30];
    var dataLabels_most_popular_words = ['like','love','know','boom','people','call','yeah','want','never','make'];
    var most_popular_words_Chart = new Chart(ctx_most_popular_words, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words,
        datasets: [{
            label: 'Count',
            data: dataValues_most_popular_words,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            title: {
                display: true,
                text: "Most popular words",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '#Occurences',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Words',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//--------------------


function showMostPopularWords_Melodrama(){
    var ctx_most_popular_words_melodrama = document.getElementById("chart-most-popular-words-melodrama").getContext('2d');
    var dataValues_most_popular_words_melodrama = [40, 25, 20, 20, 17, 16, 16, 15, 14, 14];
    var dataLabels_most_popular_words_melodrama = ['boom','love','when','light','make','know','mind','supercut','things','call'];
    var most_popular_words_Chart_melodrama = new Chart(ctx_most_popular_words_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_melodrama,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Most used words in Melodrama",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '#Ocurrences',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


function showMostPopularWords_pureHeroine(){
    var ctx_most_popular_words_pureHeroine = document.getElementById("chart-most-popular-words-pureHeroine").getContext('2d');
    var dataValues_most_popular_words_pureHeroine = [63, 38, 31, 31, 29, 25, 24, 24, 24, 22];
    var dataLabels_most_popular_words_pureHeroine = ['like','people','love','yeah','never','feels','know','biting','talking','talk'];
    var most_popular_words_Chart_pureHeroine = new Chart(ctx_most_popular_words_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_pureHeroine,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Most used words in Pure Heroine",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '#Ocurrences',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//-----------------

function showTFIDF_Melodrama(){
    var ctx_TFIDF_melodrama = document.getElementById("chart-TFIDF-melodrama").getContext('2d');
    var dataValues_TFIDF_melodrama = [0.9189486384538972,0.7616438130090609,0.6244130909523604,0.609207891745432,0.5976496055935542,0.5558858925588193,0.5372648489806265,0.5278497949693597,0.5207660297584914,0.5152550086940663];
    var dataLabels_TFIDF_melodrama = ['boom','much','liability','love','supercut','when','places','perfect','thought','make'];
    var TFIDF_Chart_melodrama = new Chart(ctx_TFIDF_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_melodrama,
        datasets: [{
            label: 'Count',
            data: dataValues_TFIDF_melodrama,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Most important words in Melodrama",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'TF-IDF Score',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showTFIDF_pureHeroine(){
    var ctx_TFIDF_pureHeroine = document.getElementById("chart-TFIDF-pureHeroine").getContext('2d');
    var dataValues_TFIDF_pureHeroine = [1.457891088352351,1.0269913356705658,0.8538257239238773,0.8271524467621539,0.7897352373440186,0.7563868401339567,0.7010520347122493,0.6979362836474323,0.6851946319552147,0.6792457039939788];
    var dataLabels_TFIDF_pureHeroine = ['like','yeah','love','people','club','take','call','know','never','talking'];
    var TFIDF_Chart_pureHeroine = new Chart(ctx_TFIDF_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_TFIDF_pureHeroine,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Most important words in Pure Heroine",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'TF-IDF Score',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//-----------------



function showNRC_All_Melodrama(){
    var ctx_NRC_All_melodrama = document.getElementById("chart-NRC-All-melodrama").getContext('2d');
    var dataValues_NRC_All_melodrama = [34, 34, 29, 27, 27, 23, 20, 18];
    var dataLabels_NRC_All_melodrama = ['fear', 'sadness', 'joy', 'anger', 'trust', 'anticipation', 'surprise','disgust'];
    var NRC_All_Chart_melodrama = new Chart(ctx_NRC_All_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_melodrama,
        datasets: [{
            label: 'Count',
            data: dataValues_NRC_All_melodrama,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Most prominent feelings in Melodrama",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Word count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Feeling',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_All_pureHeroine(){
    var ctx_NRC_All_pureHeroine = document.getElementById("chart-NRC-All-pureHeroine").getContext('2d');
    var dataValues_NRC_All_pureHeroine = [42, 40, 40, 36, 35, 31, 26, 18];
    var dataLabels_NRC_All_pureHeroine = ['trust', 'anticipation', 'joy', 'sadness', 'fear', 'anger', 'surprise','disgust'];
    var NRC_All_Chart_pureHeroine = new Chart(ctx_NRC_All_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_pureHeroine,
        datasets: [{
            label: 'Count',
            data: dataValues_NRC_All_pureHeroine,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Most prominent feelings in Pure Heroine",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Word count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Feeling',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


//--------------

function showNRC_Pos_Melodrama(){
    var ctx_NRC_Pos_melodrama = document.getElementById("chart-NRC-Pos-melodrama").getContext('2d');
    var dataValues_NRC_Pos_melodrama = [25, 14, 12, 11, 8, 6, 5, 5, 5, 4];
    var dataLabels_NRC_Pos_melodrama = ['love','green','dance','perfect','honey','writer','lover','radio','inspired','talk'];
    var NRC_Pos_Chart_melodrama = new Chart(ctx_NRC_Pos_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_melodrama,
        datasets: [{
            label: 'Count',
            data: dataValues_NRC_Pos_melodrama,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Biggest Contributions to POSITIVE Feelings in Melodrama",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Neg_Melodrama(){
    var ctx_NRC_Neg_melodrama = document.getElementById("chart-NRC-Neg-melodrama").getContext('2d');
    var dataValues_NRC_Neg_melodrama = [13, 8, 6, 5, 4, 4, 3, 3, 3, 3];
    var dataLabels_NRC_Neg_melodrama = ['shit','lose','leave','wild','melodrama','fight','lost','mother','blind','spent'];
    var NRC_Neg_Chart_melodrama = new Chart(ctx_NRC_Neg_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_melodrama,
        datasets: [{
            label: 'Count',
            data: dataValues_NRC_Neg_melodrama,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Biggest Contributions to NEGATIVE Feelings in Melodrama",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Words',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}


function showNRC_Pos_pureHeroine(){
    var ctx_NRC_Pos_pureHeroine = document.getElementById("chart-NRC-Pos-pureHeroine").getContext('2d');
    var dataValues_NRC_Pos_pureHeroine = [31, 22, 15, 11, 10, 9, 7, 6, 6, 5];
    var dataLabels_NRC_Pos_pureHeroine = ['love','talk','good','kind','friend','baby','white','glow','teens','gold'];
    var NRC_Pos_Chart_pureHeroine = new Chart(ctx_NRC_Pos_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_pureHeroine,
        datasets: [{
            label: 'Count',
            data: dataValues_NRC_Pos_pureHeroine,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Biggest Contributions to POSITIVE Feelings in Pure Heroine",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Neg_pureHeroine(){
    var ctx_NRC_Neg_pureHeroine = document.getElementById("chart-NRC-Neg-pureHeroine").getContext('2d');
    var dataValues_NRC_Neg_pureHeroine = [6, 6, 5, 5, 5, 5, 4, 4, 4, 4];
    var dataLabels_NRC_Neg_pureHeroine = ['teens','crime','wear','trick','lose','wrong','tough','drown','fall','kill'];
    var NRC_Neg_Chart_pureHeroine = new Chart(ctx_NRC_Neg_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_pureHeroine,
        datasets: [{
            label: 'Count',
            data: dataValues_NRC_Neg_pureHeroine,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Biggest Contributions to NEGATIVE Feelings in Pure Heroine",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Count',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Word',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}