function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function (workDay = 'go to the office'){
    return `This Monday, I will ${workDay}.`
}

function wrapAdjective(visFlair = '*'){
    return function (emphatic = 'special'){
        return `You are ${visFlair}${emphatic}${visFlair}!` 
    }
}