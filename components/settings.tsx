"use client";

// import ClearChatsButton from "./settings-clear-chats";
// import SettingsThemeToggle from "./settings-theme-toggle";
// import SystemPrompt, { SystemPromptProps } from "./system-prompt";
import { Input } from "./ui/input";

const TemperatureSlider = () => {
  // const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setChatOptions({  temperature: parseFloat(e.target.value) });
  // };

  return (
    <div>
      <div
        className="mx-2 flex align-middle gap-4 items-center justify-between
      "
      >
        <label
          htmlFor="small-input"
          className="text-xs font-medium text-gray-900 dark:text-white align-middle"
        >
          Temperature
        </label>
        <Input
          type="text"
          id="small-input"
          className="w-1/4 text-gray-900 hover:border hover:border-gray-300 rounded-sm hover:bg-gray-200 text-xs focus:ring-blue-500 focus:border-blue-500 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-6
          text-right
          "
          value={0}
          onChange={() => {}}
          min={0}
          max={2}
          step={0.1}
        />
      </div>

      <div className="p-2">
        <input
          id="labels-range-input"
          type="range"
          value={0}
          onChange={() => {}}
          min="0.0"
          max="2.0"
          step="0.1"
          className="w-full h-1 bg-gray-200 rounded-sm appearance-none cursor-pointer range-sm dark:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default function Settings() {
  return (
    <>
      {/* <SystemPrompt chatOptions={chatOptions} setChatOptions={setChatOptions} /> */}
      <TemperatureSlider
        chatOptions={{
          temperature: 0,
        }}
        // setChatOptions={setChatOptions}
      />
      {/* <SettingsThemeToggle /> */}
      {/* <ClearChatsButton /> */}
    </>
  );
}
