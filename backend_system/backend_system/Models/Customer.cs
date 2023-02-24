using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Customer
{
    public int Id { get; set; }

    public virtual Cart? Cart { get; set; }
}
