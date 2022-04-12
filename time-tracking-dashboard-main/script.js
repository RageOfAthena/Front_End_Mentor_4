let jsonarray = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const work_para = document.querySelector(".dashboard_work_para");
const play_para = document.querySelector(".dashboard_play_para");
const study_para = document.querySelector(".dashboard_study_para");
const exercise_para = document.querySelector(".dashboard_exercise_para");
const social_para = document.querySelector(".dashboard_social_para");
const self_para = document.querySelector(".dashboard_self_para");
///////////////////////////////////////////
const work_sub = document.querySelector(".dashboard_work_sub");
const play_sub = document.querySelector(".dashboard_play_sub");
const study_sub = document.querySelector(".dashboard_study_sub");
const exercise_sub = document.querySelector(".dashboard_exercise_sub");
const social_sub = document.querySelector(".dashboard_social_sub");
const self_sub = document.querySelector(".dashboard_self_sub");
////////////////////////////////////////////
const daily_btn = document.querySelector(".dashboard_profile_daily_link");
const weekly_btn = document.querySelector(".dashboard_profile_weekly_link");
const monthly_btn = document.querySelector(".dashboard_profile_monthly_link");
const links = document.querySelector(".dashboard_links");
//////////////////////////////////////////////////

let current_change = function (element, index, time) {
  if (
    jsonarray[index]["timeframes"][time]["current"] === 1 ||
    jsonarray[index]["timeframes"][time]["current"] === 0
  ) {
    element.textContent = `${jsonarray[index]["timeframes"][time]["current"]}hr`;
  } else {
    element.textContent = `${jsonarray[index]["timeframes"][time]["current"]}hrs`;
  }
};
let previous_change = function (element, index, time) {
  let prefix;
  if (time === "daily") {
    prefix = "Yesterday";
  } else if (time === "weekly") {
    prefix = "Last Week";
  } else {
    prefix = "Last Month";
  }
  if (
    jsonarray[index]["timeframes"][time]["previous"] === 1 ||
    jsonarray[index]["timeframes"][time]["previous"] === 0
  ) {
    element.textContent = `${prefix} ${jsonarray[index]["timeframes"][time]["previous"]}hr`;
  } else {
    element.textContent = `${prefix} ${jsonarray[index]["timeframes"][time]["previous"]}hrs`;
  }
};
links.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target === links) {
    return;
  }
  let new_arr = Array.from(links.children);
  //   console.log(new_arr);

  new_arr.forEach((element) => {
    element.classList.remove("active");
    if (element === e.target) {
      element.classList.add("active");
      let time = element.dataset.time;
      //work
      current_change(work_para, 0, time);
      previous_change(work_sub, 0, time);
      //play
      current_change(play_para, 1, time);
      previous_change(play_sub, 1, time);
      //study
      current_change(study_para, 2, time);
      previous_change(study_sub, 2, time);
      //exercise
      current_change(exercise_para, 3, time);
      previous_change(exercise_sub, 3, time);
      //social
      current_change(social_para, 4, time);
      previous_change(social_sub, 4, time);
      //self care
      current_change(self_para, 5, time);
      previous_change(self_sub, 5, time);
    }
  });
});
