import { CheckCircle } from "lucide-react";
import { Button } from "react-day-picker";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for your team. All plans include a
              14-day free trial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Starter Plan */}
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-muted-foreground">
                Perfect for small teams just getting started
              </p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-bold">$12</span>
              <span className="ml-1 text-muted-foreground">/user/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Up to 5 team members</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>5GB storage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Email support</span>
              </li>
            </ul>
            <Button className="mt-8 rounded-full">Get started</Button>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground">
                Ideal for growing teams with advanced needs
              </p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-bold">$29</span>
              <span className="ml-1 text-muted-foreground">/user/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>20GB storage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Custom integrations</span>
              </li>
            </ul>
            <Button className="mt-8 rounded-full">Get started</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">
                For large organizations with specific requirements
              </p>
            </div>
            <div className="mt-4 flex items-baseline">
              <span className="text-3xl font-bold">$49</span>
              <span className="ml-1 text-muted-foreground">/user/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Unlimited everything</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Advanced security</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>100GB storage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>Custom onboarding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>SLA guarantees</span>
              </li>
            </ul>
            <Button className="mt-8 rounded-full">Contact sales</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
