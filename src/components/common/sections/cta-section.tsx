import { Button } from "@/components/ui/Button";

export default function CTASection() {
    return (
        <section className="relative pb-40 rounded-3xl text-center space-y-6 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-emerald-950 rounded-3xl p-16">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 dark:bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 dark:bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <div className="inline-block">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 text-white">
                        <span className="w-2 h-2 bg-[#0edbca] rounded-full animate-pulse"></span>
                        Join 10,000+ Developers
                        </span>
                    </div>
      
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        Ready to improve your English?
                    </h2>
      
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed text-white">
                        Start learning today and communicate confidently at work.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button>
                        Get Started
                        </Button>
                        <Button 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10 text-base font-semibold backdrop-blur-sm"
                        >
                        View Demo
                        </Button>
                    </div>
      
                    {/* Social proof */}
                    <div className="flex items-center justify-center gap-8 pt-8 text-sm opacity-75 text-white">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⭐</span>
                            <span>4.9/5 Rating</span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-white/30"></div>

                        <div className="flex items-center gap-2">
                            <span className="text-2xl">✓</span>
                            <span>Free Trial</span>
                        </div>

                        <div className="hidden sm:block w-px h-4 bg-white/30"></div>

                        <div className="flex items-center gap-2">
                            <span className="text-2xl">🚀</span>
                            <span>Start in 2 mins</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}