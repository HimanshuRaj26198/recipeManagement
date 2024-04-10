import "./Sidebar.scss";
import { useState, useEffect, useContext } from 'react';
import { fetchAllRecipes } from "../../Common/fetchData";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FilterContext } from "../../Context/FilterContext";




const Sidebar = () => {
    let [tagsArr, setTagsArr] = useState([]);
    let [mealTypeArr, setMealTypeArr] = useState([]);
    let [difficultyArr, setDifficultyArr] = useState([]);
    let [cuisineArr, setCuisineArr] = useState([]);
    const [difficultyAllChecked, setDifficultyAllChecked] = useState([false, false]);
    const [cuisineAllChecked, setCuisineAllChecked] = useState([false, false]);
    const [mealAllChecked, setMealAllChecked] = useState([false, false]);
    const [tagsAllChecked, setTagsAllChecked] = useState([false, false]);
    const { dispatch } = useContext(FilterContext);
    const [filterObj, setFilterObj] = useState({});
    const [selectedCusine, setSelectedCuiseine] = useState("");
    const [selectedMealType, setSelectedMealType] = useState("");
    const [selectedTags, setSelectedTags] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const { data } = useContext(FilterContext);


    const handleCuisine = (event) => {
        let arr = [];
        if (event.target.checked === true) {
            arr = cuisineArr.map(a => {
                a.selected = false;
                return a;
            })

            dispatch({ type: 'SET_FILTER', payload: {} })
        } else if (event.target.checked === false) {
            arr = cuisineArr.map(a => {
                a.selected = false;
                return a;
            })
        }
        setCuisineArr(arr)
        let booleanArr = [];
        cuisineArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setCuisineAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setCuisineAllChecked([true, true]);
        } else {
            setCuisineAllChecked([true, false])
        }

    }

    const handleMeal = (event) => {
        let arr = [];
        if (event.target.checked === true) {
            arr = mealTypeArr.map(a => {
                a.selected = false;
                return a;
            })
            dispatch({ type: 'SET_FILTER', payload: {} })
        } else if (event.target.checked === false) {
            arr = mealTypeArr.map(a => {
                a.selected = false;
                return a;
            })
        }
        setMealTypeArr(arr)
        let booleanArr = [];
        mealTypeArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setMealAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setMealAllChecked([true, true]);
        } else {
            setMealAllChecked([true, false])
        }

    }

    const handleTags = (event) => {
        let arr = [];
        if (event.target.checked === true) {
            arr = tagsArr.map(a => {
                a.selected = false;
                return a;
            })
            dispatch({ type: 'SET_FILTER', payload: {} })
        } else if (event.target.checked === false) {
            arr = tagsArr.map(a => {
                a.selected = false;
                return a;
            })
        }
        setTagsArr(arr)
        let booleanArr = [];
        tagsArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setTagsAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setTagsAllChecked([true, true]);
        } else {
            setTagsAllChecked([true, false])
        }

    }



    const handleChange1 = (event) => {
        let arr = [];
        if (event.target.checked === true) {
            arr = difficultyArr.map(a => {
                a.selected = false;
                return a;
            })
            dispatch({ type: 'SET_FILTER', payload: {} })
        } else if (event.target.checked === false) {
            arr = difficultyArr.map(a => {
                a.selected = false;
                return a;
            })
        }
        setDifficultyArr(arr)
        let booleanArr = [];
        difficultyArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setDifficultyAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setDifficultyAllChecked([true, true]);
        } else {
            setDifficultyAllChecked([true, false])
        }
    };

    const difficultySelection = (event, obj) => {
        let arr = [...difficultyArr];
        if (event.target.checked) {
            arr.forEach(a => {
                if (a.name === obj.name) {
                    a.selected = true;
                } else {
                    a.selected = false;
                }
            })
            updateFilter("difficulty", { difficulty: obj.name });
        } else {
            arr.forEach(a => {
                a.selected = false;
            })
            updateFilter("difficulty", {});
        }
        setDifficultyArr(arr);
        setSelectedDifficulty(obj.name);
        let booleanArr = [];
        difficultyArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setDifficultyAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setDifficultyAllChecked([true, true]);
        } else {
            setDifficultyAllChecked([true, false])
        }
    }

    const tagsSelection = (event, obj) => {
        let arr = [...tagsArr];
        if (event.target.checked) {
            arr.forEach(a => {
                if (a.name === obj.name) {
                    a.selected = true;
                } else {
                    a.selected = false;
                }
            })
            updateFilter("tags", { tags: obj.name });
        }
        else {
            arr.forEach(a => {
                a.selected = false;
            })
            updateFilter("tags", {});
        }
        let booleanArr = [];
        tagsArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setTagsAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setTagsAllChecked([true, true]);
        } else {
            setTagsAllChecked([true, false])
        }
    }

    const mealTypeSelection = (event, obj) => {
        let arr = [...mealTypeArr];
        if (event.target.checked) {
            arr.forEach(a => {
                if (a.name === obj.name) {
                    a.selected = true;
                } else {
                    a.selected = false;
                }
            })
            updateFilter("mealType", { mealType: obj.name });
        }
        else {
            arr.forEach(a => {
                a.selected = false;
            })
            updateFilter("mealType", {});
        }
        let booleanArr = [];
        mealTypeArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setMealAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setMealAllChecked([true, true]);
        } else {
            setMealAllChecked([true, false])
        }
    }

    const cuisineSelection = (event, obj) => {
        let arr = [...cuisineArr];
        if (event.target.checked) {
            arr.forEach(a => {
                if (a.name === obj.name) {
                    a.selected = true;
                } else {
                    a.selected = false;
                }
            })
            updateFilter("cuisine", { cuisine: obj.name });
        }
        else {
            arr.forEach(a => {
                a.selected = false;
            })
            updateFilter("cuisine", {});
        }
        let booleanArr = [];
        cuisineArr.forEach(a => {
            if (a.selected === true) {
                booleanArr.push(a.selected)
            } else {
                booleanArr.push(a.selected)
            }
        });
        if (!booleanArr.includes(true)) {
            setCuisineAllChecked([false, false]);
        } else if (!booleanArr.includes(false)) {
            setCuisineAllChecked([true, true]);
        } else {
            setCuisineAllChecked([true, false])
        }
    }

    const updateFilter = (property, obj) => {
        let recipeFilter = data.state;
        console.log("Filter Context DATA", recipeFilter);
        if (property === "cuisine") {
            if (obj.cuisine) {
                recipeFilter.cuisine = obj.cuisine;
            } else {
                delete recipeFilter.cuisine;
            }
        }
        if (property === "difficulty") {
            if (obj.difficulty) {
                recipeFilter.difficulty = obj.difficulty;
            } else {
                delete recipeFilter.difficulty;
            }
        }
        if (property === "mealType") {
            if (obj.mealType) {
                recipeFilter.mealType = obj.mealType;
            } else {
                delete recipeFilter.mealType;
            }
        }
        if (property === "tags") {
            if (obj.tags) {
                recipeFilter.tags = obj.tags
            } else {
                delete recipeFilter.tags
            }
        }
        setFilterObj(recipeFilter);
        dispatch({ type: "SET_FILTER", payload: recipeFilter })
    }

    useEffect(() => {
        fetchAllRecipes({ difficulty: true, tags: true, cuisine: true, mealType: true }).then(data => {
            let allTags = [];
            let allMeals = [];
            let allCuisine = [];
            let allDifficulty = [];
            data.data.recipes.forEach(a => {
                if (!allCuisine.includes(a.cuisine)) {
                    allCuisine.push(a.cuisine)
                }
                if (allDifficulty.indexOf(a.difficulty) === -1) {
                    allDifficulty.push(a.difficulty)
                }
                a.tags.forEach(b => {
                    if (!allTags.includes(b)) {
                        allTags.push(b);
                    }
                })
                a.mealType.forEach(b => {
                    if (allMeals.indexOf(b) === -1) {
                        allMeals.push(b);
                    }
                })

            });
            allTags = allTags.map(a => { return { name: a, selected: false } })
            allDifficulty = allDifficulty.map(a => { return { name: a, selected: false } })
            allCuisine = allCuisine.map(a => { return { name: a, selected: false } });
            allMeals = allMeals.map(a => { return { name: a, selected: false } })
            setTagsArr(allTags);
            setMealTypeArr(allMeals);
            setCuisineArr(allCuisine);
            setDifficultyArr(allDifficulty);
            let booleanArr = [];
            difficultyArr.forEach(a => {
                if (a.selected === true) {
                    booleanArr.push(a.selected)
                } else {
                    booleanArr.push(a.selected)
                }
            });
            if (!booleanArr.includes(true)) {
                setDifficultyAllChecked([false, false]);
            } else if (!booleanArr.includes(false)) {
                setDifficultyAllChecked([true, true]);
            } else {
                setDifficultyAllChecked([true, false])
            }
        });

    }, [])


    return <div className="sidebar" >
        <div className="filter_title"><h3  >Filters</h3></div>
        <div className="difficulty_Filter" >
            <FormControlLabel
                label="Difficulty"
                control={
                    <Checkbox
                        checked={difficultyAllChecked[0] === true && difficultyAllChecked[1] === true}
                        indeterminate={difficultyAllChecked[0] || difficultyAllChecked[1]}
                        onChange={handleChange1}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                {difficultyArr && difficultyArr.map(a => {
                    return <FormControlLabel
                        key={a.name}
                        label={a.name}
                        control={<Checkbox checked={a.selected} onChange={(event) => { difficultySelection(event, a) }} />}
                    />

                })}
            </Box>

        </div>
        <div className="cuisine_Filter" >
            <FormControlLabel
                label="Cuisine"
                control={
                    <Checkbox
                        checked={cuisineAllChecked[0] === true && cuisineAllChecked[1] === true}
                        indeterminate={cuisineAllChecked[0] || cuisineAllChecked[1]}
                        onChange={handleCuisine}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                {cuisineArr && cuisineArr.map(a => {
                    return <FormControlLabel
                        key={a.name}
                        label={a.name}
                        control={<Checkbox checked={a.selected} onChange={(event) => { cuisineSelection(event, a) }} />}
                    />

                })}
            </Box>

        </div>
        <div className="meal_filter" >
            <FormControlLabel
                label="Meal Type"
                control={
                    <Checkbox
                        checked={mealAllChecked[0] === true && mealAllChecked[1] === true}
                        indeterminate={mealAllChecked[0] || mealAllChecked[1]}
                        onChange={handleMeal}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                {mealTypeArr && mealTypeArr.map(a => {
                    return <FormControlLabel
                        key={a.name}
                        label={a.name}
                        control={<Checkbox checked={a.selected} onChange={(event) => { mealTypeSelection(event, a) }} />}
                    />

                })}
            </Box>

        </div>

        <div className="tag_filter" >
            <FormControlLabel
                label="Tags"
                control={
                    <Checkbox
                        checked={tagsAllChecked[0] === true && tagsAllChecked[1] === true}
                        indeterminate={tagsAllChecked[0] || tagsAllChecked[1]}
                        onChange={handleTags}
                    />
                }
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                {tagsArr && tagsArr.map(a => {
                    return <FormControlLabel
                        key={a.name}
                        label={a.name}
                        control={<Checkbox checked={a.selected} onChange={(event) => { tagsSelection(event, a) }} />}
                    />

                })}
            </Box>

        </div>
    </div>
}

export default Sidebar;