using System;
using System.Collections.Generic;

namespace TaskManagerApp
{
    class TaskManager
    {
        List<string> tasks = new List<string>();

        public void AddTask(string task)
        {
            tasks.Add(task);
        }

        public void ListTasks()
        {
            Console.WriteLine("Tasks:");
            foreach (var task in tasks)
            {
                Console.WriteLine(task);
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            TaskManager taskManager = new TaskManager();

            taskManager.AddTask("Complete project proposal");
            taskManager.AddTask("Prepare presentation");
            taskManager.AddTask("Review code");

            taskManager.ListTasks();
        }
    }
}
