const questions = [
    // SECTION 1: Teaching Orientation
    {
        id: 1,
        text: "During a session, you realize some learners are confused but time is limited. You:",
        options: [
            { text: "Complete the topic as planned", score: 0 },
            { text: "Briefly recap and move ahead", score: 1 },
            { text: "Ask learners to review later", score: 0 },
            { text: "Re-explain using a different approach", score: 2 }
        ]
    },
    {
        id: 2,
        text: "When introducing a new topic, you usually:",
        options: [
            { text: "Start with definitions", score: 1 },
            { text: "Follow slides strictly", score: 0 },
            { text: "Use a simple real-world example", score: 2 },
            { text: "Jump directly into advanced use cases", score: 0 }
        ]
    },
    {
        id: 3,
        text: "A learner asks a question unrelated to the topic being taught.",
        options: [
            { text: "Ignore it", score: 0 },
            { text: "Ask them to ask later", score: 1 },
            { text: "Briefly connect it to the topic", score: 2 },
            { text: "Say it’s out of scope", score: 0 }
        ]
    },
    // SECTION 2: Emotional Intelligence & Empathy
    {
        id: 4,
        text: "A learner says, “This is too difficult for me.”",
        options: [
            { text: "Encourage them to practice more", score: 1 },
            { text: "Reassure them and simplify the explanation", score: 2 },
            { text: "Suggest extra reading", score: 1 },
            { text: "Continue with the class", score: 0 }
        ]
    },
    {
        id: 5,
        text: "A learner appears disengaged during sessions.",
        options: [
            { text: "Ignore and continue", score: 0 },
            { text: "Ask them to focus", score: 1 },
            { text: "Check privately what’s blocking them", score: 2 },
            { text: "Assume lack of interest", score: 0 }
        ]
    },
    {
        id: 6,
        text: "A learner is frustrated after multiple attempts.",
        options: [
            { text: "Ask them to retry", score: 1 },
            { text: "Break the problem into smaller steps", score: 2 },
            { text: "Tell them it takes time", score: 1 },
            { text: "Move to the next learner", score: 0 }
        ]
    },
    // SECTION 3: Adaptability & Flexibility
    {
        id: 7,
        text: "A teaching method is not working well. You:",
        options: [
            { text: "Stick to it for consistency", score: 0 },
            { text: "Try another explanation style", score: 2 },
            { text: "Skip the topic", score: 0 },
            { text: "Ask learners to self-study", score: 1 }
        ]
    },
    {
        id: 8,
        text: "Learners have mixed experience levels. You:",
        options: [
            { text: "Teach at an average pace", score: 1 },
            { text: "Focus on advanced learners", score: 0 },
            { text: "Use layered explanations", score: 2 },
            { text: "Separate sessions", score: 1 }
        ]
    },
    {
        id: 9,
        text: "A learner understands theory but struggles in application.",
        options: [
            { text: "Repeat theory", score: 0 },
            { text: "Provide step-by-step examples", score: 2 },
            { text: "Ask them to practice more", score: 1 },
            { text: "Ignore and continue", score: 0 }
        ]
    },
    // SECTION 4: Accountability & Ownership
    {
        id: 10,
        text: "Many learners score low in assessments. You think:",
        options: [
            { text: "Learners didn’t study enough", score: 0 },
            { text: "Questions were tough", score: 1 },
            { text: "Teaching approach may need improvement", score: 2 },
            { text: "Learners lack basics", score: 0 }
        ]
    },
    {
        id: 11,
        text: "Assignment submissions are delayed. You:",
        options: [
            { text: "Penalize learners", score: 1 },
            { text: "Extend deadline without discussion", score: 1 },
            { text: "Clarify expectations and timelines", score: 2 },
            { text: "Ignore delays", score: 0 }
        ]
    },
    {
        id: 12,
        text: "A learner fails repeatedly. You:",
        options: [
            { text: "Suggest they drop the course", score: 0 },
            { text: "Encourage and provide guidance", score: 2 },
            { text: "Reduce difficulty", score: 1 },
            { text: "Move ahead", score: 0 }
        ]
    },
    // SECTION 5: Feedback & Growth Mindset
    {
        id: 13,
        text: "You receive negative feedback. You:",
        options: [
            { text: "Ignore it", score: 0 },
            { text: "Defend your approach", score: 0 },
            { text: "Reflect and improve", score: 2 },
            { text: "Assume feedback is biased", score: 0 }
        ]
    },
    {
        id: 14,
        text: "Learners suggest a new learning format.",
        options: [
            { text: "Reject it", score: 0 },
            { text: "Evaluate and experiment", score: 2 },
            { text: "Delay decision", score: 1 },
            { text: "Stick to existing format", score: 0 }
        ]
    },
    {
        id: 15,
        text: "After a session, you usually:",
        options: [
            { text: "Move on to the next topic", score: 0 },
            { text: "Ask learners if they understood", score: 1 },
            { text: "Review what worked and didn’t", score: 2 },
            { text: "Check attendance only", score: 0 }
        ]
    },
    // SECTION 6: Classroom Control & Professional Behaviour
    {
        id: 16,
        text: "A learner interrupts frequently. You:",
        options: [
            { text: "Strictly warn them", score: 1 },
            { text: "Ignore them", score: 0 },
            { text: "Address politely and redirect", score: 2 },
            { text: "End discussion", score: 0 }
        ]
    },
    {
        id: 17,
        text: "Time is running out but learners have questions.",
        options: [
            { text: "End immediately", score: 0 },
            { text: "Answer briefly and share resources", score: 2 },
            { text: "Skip remaining content", score: 1 },
            { text: "Extend without control", score: 1 }
        ]
    },
    // SECTION 7: Teaching Confidence vs Ego
    {
        id: 18,
        text: "A learner offers a different solution.",
        options: [
            { text: "Reject it", score: 0 },
            { text: "Explore and discuss it", score: 2 },
            { text: "Say your way is better", score: 0 },
            { text: "Postpone discussion", score: 1 }
        ]
    },
    {
        id: 19,
        text: "Learners question your explanation.",
        options: [
            { text: "Get defensive", score: 0 },
            { text: "Clarify calmly", score: 2 },
            { text: "Ignore", score: 0 },
            { text: "Blame misunderstanding", score: 0 }
        ]
    },
    // SECTION 8: Cultural Fit & Learning Values
    {
        id: 20,
        text: "Your main goal as a trainer is:",
        options: [
            { text: "Completing syllabus", score: 0 },
            { text: "Sharing knowledge", score: 1 },
            { text: "Ensuring learner success", score: 2 },
            { text: "Maintaining authority", score: 0 }
        ]
    }
];
