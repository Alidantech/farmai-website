import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to transform your workflow?
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Join thousands of teams already using StreamLine to boost
              productivity and collaboration.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button size="lg" className="w-full rounded-full">
                Start your free trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full"
              >
                Schedule a demo
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
