import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export default function PopularSection() {
    return (
        <section className="space-y-10">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Popular Lessons</h2>
                <Button>View all</Button>
            </div>
    
            <div className="grid md:grid-cols-3 gap-8">
                <Card
                title="Daily Standup"
                description="Learn how to talk about your tasks in meetings."
                tag={<Tag label="Beginner" variant="green" />}
                action={<Button>Start</Button>}
                />
    
                <Card
                title="Code Review"
                description="Give feedback on pull requests professionally."
                tag={<Tag label="Intermediate" variant="blue" />}
                action={<Button>Start</Button>}
                />
    
                <Card
                title="Debugging"
                description="Explain bugs and solutions clearly."
                tag={<Tag label="Advanced" variant="yellow" />}
                action={<Button>Start</Button>}
                />
            </div>
        </section>
        
    )
}