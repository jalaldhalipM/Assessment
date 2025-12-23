const questions = [
    // SECTION 1: Situation Framing & Sensemaking
    {
        id: 1,
        text: "You join an ongoing initiative midway, and progress seems uneven across people involved. Your first instinct is to:",
        options: [
            { text: "Understand what success looks like before making changes", score: 2 },
            { text: "Observe patterns quietly for a while", score: 1 },
            { text: "Ask direct questions to identify gaps", score: 1 },
            { text: "Start optimizing your own part immediately", score: 0 }
        ]
    },
    {
        id: 2,
        text: "You’re given a broad objective with minimal constraints. You usually:",
        options: [
            { text: "Define your own structure and milestones", score: 1 },
            { text: "Seek examples of how similar goals were achieved", score: 1 },
            { text: "Clarify expectations with stakeholders", score: 2 },
            { text: "Start experimenting and refine later", score: 1 }
        ]
    },
    {
        id: 3,
        text: "While reviewing work done by others, you notice inconsistencies. You assume this is mostly due to:",
        options: [
            { text: "Differences in interpretation", score: 1 },
            { text: "Lack of shared context", score: 2 },
            { text: "Variations in experience", score: 1 },
            { text: "Individual working styles", score: 1 }
        ]
    },
    {
        id: 4,
        text: "When something feels “off” but you can’t pinpoint why, you tend to:",
        options: [
            { text: "Trust your instinct and slow things down", score: 1 },
            { text: "Collect more data points", score: 1 },
            { text: "Discuss openly to surface assumptions", score: 2 },
            { text: "Proceed cautiously and adjust later", score: 1 }
        ]
    },
    {
        id: 5,
        text: "In complex situations, clarity for you usually comes from:",
        options: [
            { text: "Breaking things into smaller parts", score: 1 },
            { text: "Talking through it with others", score: 2 },
            { text: "Visualizing the end result", score: 2 },
            { text: "Trying a small action", score: 1 }
        ]
    },
    // SECTION 2: Response Under Ambiguity
    {
        id: 6,
        text: "A decision must be made without complete information. You prefer to:",
        options: [
            { text: "Delay until more certainty exists", score: 0 },
            { text: "Decide based on principles you trust", score: 2 },
            { text: "Choose the least risky option", score: 1 },
            { text: "Decide, knowing it can be corrected", score: 2 }
        ]
    },
    {
        id: 7,
        text: "When two reasonable approaches conflict, you usually:",
        options: [
            { text: "Pick the one that scales better", score: 1 },
            { text: "Choose the one people align with", score: 1 },
            { text: "Test both on a small scale", score: 2 },
            { text: "Go with the familiar one", score: 0 }
        ]
    },
    {
        id: 8,
        text: "If a plan starts failing midway, your response is to:",
        options: [
            { text: "Revisit assumptions", score: 2 },
            { text: "Push through to completion", score: 0 },
            { text: "Adjust scope and expectations", score: 1 },
            { text: "Pause and reassess direction", score: 2 }
        ]
    },
    {
        id: 9,
        text: "When faced with resistance to change, you:",
        options: [
            { text: "Explain the rationale logically", score: 1 },
            { text: "Listen first to concerns", score: 2 },
            { text: "Demonstrate through action", score: 2 },
            { text: "Escalate for alignment", score: 0 }
        ]
    },
    {
        id: 10,
        text: "Under pressure, your decision-making becomes:",
        options: [
            { text: "Faster and more decisive", score: 1 },
            { text: "More collaborative", score: 2 },
            { text: "More conservative", score: 1 },
            { text: "More focused on essentials", score: 2 }
        ]
    },
    // SECTION 3: People Impact & Emotional Regulation
    {
        id: 11,
        text: "Someone working with you is capable but disengaged. You:",
        options: [
            { text: "Reduce dependency on them", score: 0 },
            { text: "Address performance directly", score: 1 },
            { text: "Try to understand motivation", score: 2 },
            { text: "Compensate by doing more yourself", score: 0 }
        ]
    },
    {
        id: 12,
        text: "When disagreements arise, you value most:",
        options: [
            { text: "Reaching closure quickly", score: 0 },
            { text: "Maintaining harmony", score: 1 },
            { text: "Surfacing different viewpoints", score: 2 },
            { text: "Protecting the original plan", score: 0 }
        ]
    },
    {
        id: 13,
        text: "Feedback that surprises you usually makes you:",
        options: [
            { text: "Question the source", score: 0 },
            { text: "Reflect on blind spots", score: 2 },
            { text: "Compare with other inputs", score: 1 },
            { text: "Explain your intent", score: 0 }
        ]
    },
    {
        id: 14,
        text: "In group settings, you naturally:",
        options: [
            { text: "Take the lead", score: 1 },
            { text: "Facilitate discussion", score: 2 },
            { text: "Observe and intervene selectively", score: 2 },
            { text: "Focus on execution", score: 1 }
        ]
    },
    {
        id: 15,
        text: "When someone struggles repeatedly, you believe progress comes from:",
        options: [
            { text: "Clearer expectations", score: 1 },
            { text: "More practice", score: 1 },
            { text: "Different framing", score: 2 },
            { text: "Stronger accountability", score: 1 }
        ]
    },
    // SECTION 4: Reflection, Learning & Ownership
    {
        id: 16,
        text: "After completing something important, you usually:",
        options: [
            { text: "Move on to the next priority", score: 0 },
            { text: "Review outcomes against intent", score: 2 },
            { text: "Collect feedback informally", score: 2 },
            { text: "Document learnings", score: 2 }
        ]
    },
    {
        id: 17,
        text: "When results differ from expectations, you focus first on:",
        options: [
            { text: "Execution gaps", score: 1 },
            { text: "Decision quality", score: 2 },
            { text: "External factors", score: 0 },
            { text: "Alignment issues", score: 2 }
        ]
    },
    {
        id: 18,
        text: "Your learning usually accelerates when you:",
        options: [
            { text: "Teach others", score: 2 },
            { text: "Face unfamiliar problems", score: 2 },
            { text: "Receive strong feedback", score: 1 },
            { text: "Review past work", score: 1 }
        ]
    },
    {
        id: 19,
        text: "Over time, you believe expertise grows mainly from:",
        options: [
            { text: "Depth of experience", score: 1 },
            { text: "Repeated practice", score: 1 },
            { text: "Continuous reflection", score: 2 },
            { text: "Exposure to diverse contexts", score: 2 }
        ]
    },
    {
        id: 20,
        text: "Looking back, you judge your effectiveness by:",
        options: [
            { text: "Tasks completed", score: 0 },
            { text: "Problems solved", score: 1 },
            { text: "People enabled", score: 2 },
            { text: "Standards maintained", score: 1 }
        ]
    }
];
