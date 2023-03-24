using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Status
{
    public string Code { get; set; } = null!;

    public string Description { get; set; } = null!;

    public int Order { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual ICollection<Order> Orders { get; } = new List<Order>();
}
