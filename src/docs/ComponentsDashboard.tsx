import React, { useState } from "react";
import AlertTA from "../components/AlertTA";
import ButtonTA from "../components/ButtonTA";
import TabTA, { TabListTA } from "../components/TabTA";

/**
 * ComponentsDashboard - simple Flowbite-like documentation page for TA components.
 * This is intentionally minimal and shows examples for Alert and Tabs.
 */
const ComponentsDashboard: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [active, setActive] = useState<string>("Overview");

  const tabs = [
    { title: "Overview" },
    { title: "Alerts" },
    { title: "Buttons" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="grid grid-cols-4 gap-6">
          <aside className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Components</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActive("Overview")}
                className={`block text-left w-full px-2 py-1 rounded ${
                  active === "Overview" ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActive("Alerts")}
                className={`block text-left w-full px-2 py-1 rounded ${
                  active === "Alerts" ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                Alert
              </button>
              <button
                onClick={() => setActive("Buttons")}
                className={`block text-left w-full px-2 py-1 rounded ${
                  active === "Buttons" ? "bg-gray-100 font-semibold" : ""
                }`}
              >
                Button
              </button>
            </nav>
          </aside>

          <main className="col-span-3">
            <div className="mb-6">
              <TabListTA
                tabs={tabs}
                activeTab={active}
                onChange={(t) => setActive(t)}
                style={{ marginBottom: 12 }}
              />
            </div>

            {active === "Overview" && (
              <section>
                <h1 className="text-2xl font-bold mb-4">Flowbite-style TA Docs</h1>
                <p className="mb-4 text-gray-600">
                  This demo shows a small documentation page for the TA components.
                </p>
                <div className="space-y-4">
                  <AlertTA title="Info alert!" description="Change a few things up and try submitting again." type="info" />
                  <ButtonTA label="Primary button" onClick={() => alert('clicked')} />
                </div>
              </section>
            )}

            {active === "Alerts" && (
              <section>
                <h2 className="text-xl font-semibold mb-3">Alert Examples</h2>

                {!dismissed && (
                  <div className="mb-4">
                    <AlertTA
                      title={<span className="font-medium">Info alert!</span>}
                      description={"Change a few things up and try submitting again."}
                      type="info"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <ButtonTA label={dismissed ? "Show" : "Dismiss"} onClick={() => setDismissed((s) => !s)} />
                  <ButtonTA label="Show success" onClick={() => alert('success sample')} />
                </div>
              </section>
            )}

            {active === "Buttons" && (
              <section>
                <h2 className="text-xl font-semibold mb-3">Button Examples</h2>
                <div className="flex gap-3">
                  <ButtonTA label="Primary" onClick={() => {}} />
                  <ButtonTA label="Secondary" onClick={() => {}} />
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ComponentsDashboard;
