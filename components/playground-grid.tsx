import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  MessageSquare,
  Search,
  ArrowRight,
  Globe,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function PlaygroundGrid() {

     const router = useRouter();

     const handleNavigation = (type: string) => {
       const uniqueId = uuidv4(); 
       router.push(`playground/${type}/${uniqueId}`); 
     };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-white">
                Open Chat
              </CardTitle>
              <MessageSquare className="w-8 h-8 text-white opacity-75" />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardDescription className="text-sm mb-4">
              Engage in intelligent conversations with our advanced AI-powered
              chat system. Get answers, brainstorm ideas, or simply enjoy a
              thoughtful discussion.
            </CardDescription>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>Natural language processing</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>Context-aware responses</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>Multi-lingual support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Button
              onClick={() => handleNavigation("chat")}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Start Chatting
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-600 p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-white">
                Open Search Engine
              </CardTitle>
              <Search className="w-8 h-8 text-white opacity-75" />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardDescription className="text-sm mb-4">
              Discover a new way of searching the web with our open and
              transparent search engine. Find relevant results quickly and
              efficiently.
            </CardDescription>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                <span>Privacy-focused</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                <span>Unbiased results</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                <span>Advanced filtering options</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Button
              onClick={() => handleNavigation("search-engine")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Searching
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-white">
                Chat with URL
              </CardTitle>
              <Globe className="w-8 h-8 text-white opacity-75" />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardDescription className="text-sm mb-4">
              Interact with web content directly. Paste a URL and start a
              conversation about the page's content with our AI assistant.
            </CardDescription>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>Instant content analysis</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>Ask questions about the page</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                <span>Summarize web content</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Chat with a URL
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold text-white">
                Chat with PDF
              </CardTitle>
              <FileText className="w-8 h-8 text-white opacity-75" />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardDescription className="text-sm mb-4">
              Upload a PDF and start a conversation about its content. Get
              insights, summaries, and answers to your questions directly from
              the document.
            </CardDescription>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                <span>Quick document analysis</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                <span>Extract key information</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
                <span>Ask questions about the PDF</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              Chat with a PDF
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
