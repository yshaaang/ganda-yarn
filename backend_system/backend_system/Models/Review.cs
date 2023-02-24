using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Review
{
    public int Id { get; set; }

    public int OrderProductId { get; set; }

    public int Rate { get; set; }

    public string Comment { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime? ModifiedAt { get; set; }

    public virtual OrderProduct OrderProduct { get; set; } = null!;
}
