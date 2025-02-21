export type FAQItem = {
    question: string;
    answer: string;
};

export const FAQS: FAQItem[] = [
    {
        question: "What is Inveris?",
        answer: "Inveris is a comprehensive solution that monitors solar panel performance, detects errors or inefficiencies, and provides actionable insights to optimize energy output and system reliability."
    },
    {
        question: "Can the system predict potential failures before they occur?",
        answer: "Yes, the system incorporates predictive analytics to analyze historical and real-time data, helping to forecast potential failures and recommend preventive maintenance to avoid downtime."
    },
    {
        question: "Is the system compatible with all types of solar panels?",
        answer: "Our system is designed to be compatible with a wide range of solar panels and inverters. Please refer to the compatibility section or contact support for specific model inquiries."
    },
    {
        question: "What kind of insights does the system provide?",
        answer: "The system provides detailed performance reports, efficiency trends, error logs, and maintenance suggestions. Users can access these insights through an intuitive dashboard powered by Grafana."
    },
    {
        question: "What kind of support do you provide?",
        answer: "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is trained to help with technical issues, platform navigation, and best practices for property management."
    },
    {
        question: "Does the system support integration with existing solar energy setups?",
        answer: "Yes, our system is designed for easy integration with existing solar panel installations. It connects to inverters and sensors to begin monitoring without requiring major hardware changes."
    },
    {
        question: "Can the system send alerts in case of critical errors?",
        answer: "YAbsolutely! The system is equipped with automated alert features that notify users via email or mobile notifications when critical issues are detected."
    }
];
