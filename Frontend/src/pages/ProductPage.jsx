// src/pages/ProductPage.jsx

import ProductNavbar from "../components/ProductNavbar";
import ProductSection from "../components/ProductSection";

export default function ProductPage() {
    return (
        <div className="bg-white">

            {/* Sticky Section Navbar */}
            <ProductNavbar />

            {/* SALES */}
            <ProductSection
                id="sales"
                title="Enquiry/Lead Management"
                image="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                points={[
                    "Create customized Fields",
                    "Social Media Integration",
                    "API Integrations",
                    "Call to Lead",
                    "Google Integration",
                ]}
            />

            {/* MARKETING */}
            <ProductSection
                id="marketing"
                title="Marketing Automation"
                reverse
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                points={[
                    "Email Campaigns",
                    "WhatsApp Automation",
                    "Lead Nurturing",
                    "Campaign Analytics",
                    "Customer Segmentation",
                ]}
            />

            {/* LEAD */}
            <ProductSection
                id="lead"
                title="Lead & Customer Engagement"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                points={[
                    "Customer Journey Tracking",
                    "Automated Followups",
                    "Multi-channel Messaging",
                    "Engagement Insights",
                    "Real-time Notifications",
                ]}
            />

            {/* SERVICE */}
            <ProductSection
                id="service"
                reverse
                title="Customer Service"
                image="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                points={[
                    "Ticket Management",
                    "AI Chatbot Support",
                    "Live Chat",
                    "Knowledge Base",
                    "24x7 Support Tools",
                ]}
            />

            {/* TEAM */}
            <ProductSection
                id="team"
                title="Team Productivity"
                image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                points={[
                    "Task Management",
                    "Internal Collaboration",
                    "Performance Tracking",
                    "Smart Reports",
                    "Productivity Insights",
                ]}
            />

            {/* TOOLS */}
            <ProductSection
                id="tools"
                reverse
                title="Business Tools"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                points={[
                    "Analytics Dashboard",
                    "Workflow Automation",
                    "CRM Integrations",
                    "Custom APIs",
                    "Cloud Synchronization",
                ]}
            />
        </div>
    );
}